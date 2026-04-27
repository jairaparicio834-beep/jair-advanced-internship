'use client'
import { BackwardIcon, ForwardIcon, PlayIcon } from '@heroicons/react/24/outline';
import { PauseIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
interface MovieAudioProps {
    movie: {
        id: string;
        director: string;
        title: string;
        tagLine: string;
        imageLink: string
        audioLink: string;
        rating: string;
        releaseYear: string;
        type: string;
        subscriptionRequired: boolean;
        summary: string;
        tags: string[];
        movieDescription: string;
    }
}
const MovieAudio = ({ movie }: MovieAudioProps) => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isSeeking, setIsSeeking] = useState(false)
    const [curentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const progressPercent = duration ? (curentTime / duration) * 100 : 0
    function isAudioPlaying() {
        if (isPlaying) {
            audioRef.current?.pause()
            setIsPlaying(false)
        } else {
            audioRef.current?.play()
            setIsPlaying(true)
        }
    }
    const skipForward = () => {
        audioRef.current!.currentTime += 10;
    };

    const skipBack = () => {
        audioRef.current!.currentTime -= 10;
    };
    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const percent = Number(e.target.value);
        const newTime = (percent / 100) * duration;
        if (audioRef.current) {
            audioRef.current.currentTime = newTime
        }
        setCurrentTime(newTime);
    }
    useEffect(() => {
        const audio = audioRef.current
        if (audio) {
            audio.load()
            audio.addEventListener('loadedmetadata', () => {
                setDuration(audio.duration)
            })
        }
    }, [])

    return (
        <>
            <audio ref={audioRef}
                src={`https://advanced-internship-api-production.up.railway.app/${movie?.audioLink}`}
                onTimeUpdate={() => {
                    if (!isSeeking) setCurrentTime(audioRef.current?.currentTime || 0)
                }}
                onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
                onCanPlay={() => setDuration(audioRef.current?.duration || 0)}
                onCanPlayThrough={() => setDuration(audioRef.current?.duration || 0)}
            />
            <div className='flex gap-3 w-[calc(100/3)]'>
                <div className='flex max-h-[48px] h-[48px] min-h-[48px] w-auto'>
                    <Image className='w-full h-full' src={movie?.imageLink} width={200} height={300} alt={movie?.title} />
                </div>
                <div className='flex flex-col gap-1 justify-center text-[#fff] text-[14px]'>
                    <p className='font-bold'>{movie?.title}</p>
                    <p className='text-[#bac8ce]'>{movie?.director}</p>
                </div>
            </div>
            <div className='w-[calc(100/3)]'>
                <div className='gap-4 flex items-center justify-center'>
                    <button className='flex items-center justify-center cursor-pointer border-none rounded-[50%] bg-transparent' onClick={skipBack}><BackwardIcon className='w-6' /></button>
                    <button className='flex items-center justify-center cursor-pointer border-none rounded-[50%] text-black w-[40px] h-[40px] bg-[#fff]' onClick={() => isAudioPlaying()} >{isPlaying ? <PauseIcon className='w-5' /> : <PlayIcon className='w-5' />}</button>
                    <button className='flex items-center justify-center cursor-pointer border-none rounded-[50%] bg-transparent' onClick={skipForward}><ForwardIcon className='w-6' /></button>
                </div>
            </div>
            <div className='flex items-center gap-4 w-[calc(100/3)] '>
                <span className="text-[#fff] w-[32px] text-[14px]">
                    {`${String(Math.floor(curentTime / 60)).padStart(2, "0")}:${String(Math.floor(curentTime % 60)).padStart(2, "0")}`}
                </span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={progressPercent}
                    onPointerDown={() => setIsSeeking(true)}
                    onPointerUp={() => setIsSeeking(false)}
                    onChange={handleSeek}
                    className='w-full h-[2px] accent-[#ff6600] cursor-pointer'
                />
                <span className='text-[#fff] w-[32px] text-[14px]'>{`${String(Math.floor(duration / 60)).padStart(2, "0")}:${String(Math.floor(duration % 60)).padStart(2, "0")}`}</span>
            </div>
        </>
    );
}

export default MovieAudio;

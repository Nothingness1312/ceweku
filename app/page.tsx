"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Music, VolumeX, Volume2, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import Image from "next/image"

export default function LoveWebsite() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const images = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  const quotes = [
    "Cinta adalah kedamaian yang paling indah dalam hidup kita",
    "Bersamamu, setiap hari adalah hari kasih sayang",
    "Kamu adalah alasan mengapa hatiku selalu damai",
    "Hatiku memilihmu, bukan tanpa alasan",
    "Langit tak selalu biru, tapi cintamu membuatku tenang",
    "Kamu membuat hidupku penuh warna dan kebahagiaan",
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [quotes.length])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "ArrowRight") nextImage()
    }
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100">
      {/* Background Music */}
      <audio ref={audioRef} loop muted={isMuted}>
        {/* Note: In a real implementation, you would need to use royalty-free music */}
        <source src="/placeholder-audio.mp3" type="audio/mpeg" />
      </audio>

      {/* Music Control */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={toggleMute}
          variant="outline"
          size="icon"
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 shadow-lg"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-indigo-400/20"></div>

        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              className={`absolute text-pink-300/30 animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${Math.random() * 20 + 10}px`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-bounce">
            <Sparkles className="h-16 w-16 text-pink-500 mx-auto mb-4" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Happy National Day Of Peace And Love
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-8">Untuk Ceweku Tersayang 💕</h2>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl mb-8 transform hover:scale-105 transition-all duration-300">
            <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">{quotes[currentQuoteIndex]}</p>
          </div>

          <div className="flex items-center justify-center gap-4 text-pink-500">
            <Music className="h-6 w-6 animate-pulse" />
            <span className="text-lg font-medium">Now Playing: Mine - Taylor Swift</span>
            <Music className="h-6 w-6 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Ceweku
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Setiap foto tentang dirimu yang selalu cantik dimanapun
          </p>

          <div className="relative">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0 relative">
                <div className="relative h-96 md:h-[500px]">
                  <Image
                    src={images[currentImageIndex] || "/placeholder.svg"}
                    alt={`Kenangan ${currentImageIndex + 1}`}
                    fill
                    className="object-cover transition-all duration-500"
                  />

                  {/* Navigation Buttons */}
                  <Button
                    onClick={prevImage}
                    variant="outline"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <Button
                    onClick={nextImage}
                    variant="outline"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-6 gap-2 overflow-x-auto pb-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                    index === currentImageIndex ? "border-pink-500 scale-110" : "border-gray-300 hover:border-pink-300"
                  }`}
                >
                  <Image
                    src={images[index] || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Love Messages Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Message buat kamu sayang hehe
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Semangat PKL sayang",
                message:
                  "Semoga PKL nya diberikan kelancaran dan kemudahan, semangat sayanggg. Butuh apa apa nanti langsung call aja yaa.",
              },
              {
                title: "Love You Sayangku",
                message: "Sayang kamu tiap detik, jam, hari, minggu, bulan, tahun, selamanya yeay.",
              },
              {
                title: "Let's Go Japan",
                message: "Jangan udahan sebelum serumah, sekamar, sejepang.",
              },
              {
                title: "Masa Depan Bersama",
                message: "Mari kita tulis cerita cinta yang indah dan penuh kedamaian untuk masa depan kita.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-pink-600 mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{item.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Heart className="h-8 w-8 text-pink-200 animate-pulse" />
            <h3 className="text-3xl font-bold">Selamat Hari Kasih Sayang</h3>
            <Heart className="h-8 w-8 text-pink-200 animate-pulse" />
          </div>
          <p className="text-xl mb-4">Untuk ceweku yang paling istimewa di dunia</p>
          <p className="text-pink-200">.</p>
        </div>
      </footer>
    </div>
  )
}

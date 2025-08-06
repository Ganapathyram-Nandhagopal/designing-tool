"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Trophy } from "lucide-react"

const bettingEvents = [
  {
    id: 1,
    title: "Dong Nai FC - Phu Dong Ninh Binh",
    competition: "Football - Vietnam - V.League 2",
    date: "2024-01-15",
    time: "19:30",
    odds1x2: ["", "", ""],
    oddsDoubleChance: ["", "", ""],
  },
  {
    id: 2,
    title: "Manchester United - Liverpool FC",
    competition: "Football - England - Premier League",
    date: "2024-01-16",
    time: "17:00",
    odds1x2: ["", "", ""],
    oddsDoubleChance: ["", "", ""],
  },
  {
    id: 3,
    title: "Real Madrid - Barcelona",
    competition: "Football - Spain - La Liga",
    date: "2024-01-17",
    time: "21:00",
    odds1x2: ["", "", ""],
    oddsDoubleChance: ["", "", ""],
  },
  {
    id: 4,
    title: "Bayern Munich - Borussia Dortmund",
    competition: "Football - Germany - Bundesliga",
    date: "2024-01-18",
    time: "18:30",
    odds1x2: ["", "", ""],
    oddsDoubleChance: ["", "", ""],
  },
  {
    id: 5,
    title: "Paris Saint-Germain - Olympique Marseille",
    competition: "Football - France - Ligue 1",
    date: "2024-01-19",
    time: "20:45",
    odds1x2: ["", "", ""],
    oddsDoubleChance: ["", "", ""],
  },
  {
    id: 6,
    title: "Juventus - AC Milan",
    competition: "Football - Italy - Serie A",
    date: "2024-01-20",
    time: "20:00",
    odds1x2: ["", "", ""],
    oddsDoubleChance: ["", "", ""],
  },
]

export default function BettingEventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b bg-background">
        <SidebarTrigger />
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">P</span>
          </div>
          <div className="font-bold text-sm">
            <span className="text-green-600">pawa</span>
            <span className="text-gray-900">bloX</span>
          </div>
        </div>
        <div></div>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-background">
        <div className="container mx-auto p-6 space-y-8 max-w-7xl">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-pw-green-400" />
              <span className="text-sm text-pw-slate-600 font-medium">
                Live odds and upcoming matches from top competitions
              </span>
            </div>
            <h1 className="text-4xl font-bold text-pw-slate-900">Popular Betting Events</h1>
            <p className="text-xl text-pw-slate-600 max-w-3xl">
              Discover the most exciting matches and betting opportunities from leagues around the world.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {bettingEvents.map((event) => (
              <Card
                key={event.id}
                className="hover:shadow-lg transition-shadow duration-200 border-pw-slate-200 hover:border-pw-green-400/50"
              >
                <CardHeader className="space-y-3">
                  <div className="space-y-2">
                    <CardTitle className="text-lg font-semibold text-pw-slate-900 leading-tight">
                      {event.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-pw-green-50 text-pw-green-700 border-pw-green-200 text-xs font-medium"
                    >
                      {event.competition}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-pw-slate-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">{event.time}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* 1X2 Full Time Section */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-pw-slate-700">1X2 | Full Time</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs text-pw-slate-500 font-medium">1</label>
                        <Input
                          placeholder="Odds"
                          className="h-9 text-sm border-pw-slate-300 focus:border-pw-green-400 focus:ring-pw-green-400/20"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-pw-slate-500 font-medium">X</label>
                        <Input
                          placeholder="Odds"
                          className="h-9 text-sm border-pw-slate-300 focus:border-pw-green-400 focus:ring-pw-green-400/20"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-pw-slate-500 font-medium">2</label>
                        <Input
                          placeholder="Odds"
                          className="h-9 text-sm border-pw-slate-300 focus:border-pw-green-400 focus:ring-pw-green-400/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Double Chance Full Time Section */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-pw-slate-700">Double Chance | Full Time</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs text-pw-slate-500 font-medium">1X</label>
                        <Input
                          placeholder="Odds"
                          className="h-9 text-sm border-pw-slate-300 focus:border-pw-green-400 focus:ring-pw-green-400/20"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-pw-slate-500 font-medium">12</label>
                        <Input
                          placeholder="Odds"
                          className="h-9 text-sm border-pw-slate-300 focus:border-pw-green-400 focus:ring-pw-green-400/20"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-pw-slate-500 font-medium">X2</label>
                        <Input
                          placeholder="Odds"
                          className="h-9 text-sm border-pw-slate-300 focus:border-pw-green-400 focus:ring-pw-green-400/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-2">
                    <Button className="w-full bg-pw-slate-900 hover:bg-pw-slate-800 text-white h-10 font-medium">
                      View More Markets
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Section */}
          <div className="flex justify-center pt-8">
            <Button
              variant="outline"
              size="lg"
              className="border-pw-green-400 text-pw-green-600 hover:bg-pw-green-50 hover:border-pw-green-500"
            >
              Load More Events
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

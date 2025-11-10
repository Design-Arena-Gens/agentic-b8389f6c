'use client'

import { useState } from 'react'
import { Calendar, TrendingUp, Users, MessageSquare, BarChart3, Zap, RefreshCw, Send, CheckCircle, Clock, AlertCircle } from 'lucide-react'
import ContentGenerator from './components/ContentGenerator'
import Analytics from './components/Analytics'
import ScheduleManager from './components/ScheduleManager'
import EngagementTracker from './components/EngagementTracker'
import WorkflowAutomation from './components/WorkflowAutomation'

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Bharat Life Care</h1>
                <p className="text-sm text-gray-600">AI Social Media Manager</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 bg-primary/10 rounded-lg">
                <span className="text-sm font-semibold text-primary">AI Agent Active</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'content', label: 'Content Generator', icon: MessageSquare },
              { id: 'schedule', label: 'Schedule', icon: Calendar },
              { id: 'engagement', label: 'Engagement', icon: Users },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp },
              { id: 'workflow', label: 'Automation', icon: RefreshCw },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'content' && <ContentGenerator />}
        {activeTab === 'schedule' && <ScheduleManager />}
        {activeTab === 'engagement' && <EngagementTracker />}
        {activeTab === 'analytics' && <Analytics />}
        {activeTab === 'workflow' && <WorkflowAutomation />}
      </main>
    </div>
  )
}

function Dashboard() {
  const stats = [
    { label: 'Posts Scheduled', value: '24', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Total Engagement', value: '12.5K', icon: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Content Generated', value: '156', icon: MessageSquare, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Reach', value: '45.2K', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-100' },
  ]

  const recentActivity = [
    { action: 'Content generated for Instagram', time: '5 min ago', status: 'completed' },
    { action: 'Post scheduled for Facebook', time: '15 min ago', status: 'completed' },
    { action: 'Engagement analysis completed', time: '1 hour ago', status: 'completed' },
    { action: 'Auto-reply to 12 comments', time: '2 hours ago', status: 'completed' },
    { action: 'Weekly report generated', time: '3 hours ago', status: 'completed' },
  ]

  const upcomingPosts = [
    { platform: 'Instagram', content: 'Health tips for winter wellness', time: 'Today, 4:00 PM' },
    { platform: 'Facebook', content: 'New healthcare services announcement', time: 'Today, 6:00 PM' },
    { platform: 'Twitter', content: 'Mental health awareness thread', time: 'Tomorrow, 10:00 AM' },
    { platform: 'LinkedIn', content: 'Healthcare industry insights', time: 'Tomorrow, 2:00 PM' },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-primary">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.bg} p-3 rounded-lg`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-primary" />
            Recent Activity
          </h3>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Posts */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-primary" />
            Upcoming Posts
          </h3>
          <div className="space-y-3">
            {upcomingPosts.map((post, index) => (
              <div key={index} className="p-3 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border-l-4 border-primary">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 bg-primary text-white text-xs font-semibold rounded mb-2">
                      {post.platform}
                    </span>
                    <p className="text-sm font-medium text-gray-900">{post.content}</p>
                    <p className="text-xs text-gray-500 mt-1 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg p-6 text-white">
        <h3 className="text-xl font-bold mb-3 flex items-center">
          <Zap className="w-6 h-6 mr-2" />
          AI Insights & Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <p className="font-semibold mb-2">Best Posting Time</p>
            <p className="text-sm opacity-90">Your audience is most active between 4-6 PM on weekdays</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <p className="font-semibold mb-2">Content Performance</p>
            <p className="text-sm opacity-90">Health tips posts generate 3x more engagement than other content</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <p className="font-semibold mb-2">Trending Topics</p>
            <p className="text-sm opacity-90">Winter wellness and mental health topics are trending this week</p>
          </div>
        </div>
      </div>
    </div>
  )
}

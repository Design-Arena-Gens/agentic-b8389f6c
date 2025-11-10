'use client'

import { useState } from 'react'
import { Calendar, Clock, Plus, Edit2, Trash2, CheckCircle } from 'lucide-react'

export default function ScheduleManager() {
  const [showAddModal, setShowAddModal] = useState(false)

  const scheduledPosts = [
    {
      id: 1,
      platform: 'Instagram',
      content: 'Health tips for winter wellness - staying healthy during cold season',
      date: '2025-11-10',
      time: '16:00',
      status: 'scheduled',
      color: 'bg-pink-500',
    },
    {
      id: 2,
      platform: 'Facebook',
      content: 'Announcing our new telehealth consultation service',
      date: '2025-11-10',
      time: '18:00',
      status: 'scheduled',
      color: 'bg-blue-600',
    },
    {
      id: 3,
      platform: 'Twitter',
      content: 'Mental health awareness: 5 simple daily practices for better wellbeing',
      date: '2025-11-11',
      time: '10:00',
      status: 'scheduled',
      color: 'bg-sky-500',
    },
    {
      id: 4,
      platform: 'LinkedIn',
      content: 'Healthcare industry insights: Digital transformation in patient care',
      date: '2025-11-11',
      time: '14:00',
      status: 'scheduled',
      color: 'bg-blue-700',
    },
    {
      id: 5,
      platform: 'Instagram',
      content: 'Patient testimonial: How Bharat Life Care changed my life',
      date: '2025-11-12',
      time: '12:00',
      status: 'scheduled',
      color: 'bg-pink-500',
    },
  ]

  const [posts, setPosts] = useState(scheduledPosts)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-primary" />
            Content Schedule
          </h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Schedule Post</span>
          </button>
        </div>

        {/* Calendar View */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-2 mb-6">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center font-semibold text-gray-700 py-2">
              {day}
            </div>
          ))}
          {Array.from({ length: 35 }, (_, i) => {
            const date = i - 6 + 10
            const hasPost = date >= 10 && date <= 15
            return (
              <div
                key={i}
                className={`p-4 border rounded-lg text-center ${
                  date === 10
                    ? 'bg-primary text-white border-primary'
                    : date > 0 && date <= 30
                    ? 'border-gray-200 hover:border-primary hover:bg-primary/5 cursor-pointer'
                    : 'border-transparent bg-gray-50'
                }`}
              >
                {date > 0 && date <= 30 ? (
                  <div>
                    <span className="text-sm font-medium">{date}</span>
                    {hasPost && (
                      <div className="mt-1 flex justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>

        {/* AI Suggestions */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 border border-primary/20">
          <p className="text-sm font-semibold text-gray-900 mb-2">🤖 AI Recommendation</p>
          <p className="text-sm text-gray-700">
            Based on your audience engagement patterns, consider posting on Instagram at 4-6 PM and LinkedIn at 10 AM - 2 PM for maximum reach.
          </p>
        </div>
      </div>

      {/* Scheduled Posts List */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Posts</h3>
        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`${post.color} text-white text-xs font-semibold px-3 py-1 rounded`}>
                      {post.platform}
                    </span>
                    <span className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.time}
                    </span>
                  </div>
                  <p className="text-gray-800 text-sm font-medium">{post.content}</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {post.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Calendar className="w-6 h-6 text-blue-600" />
          </div>
          <h4 className="font-semibold text-gray-900 mb-2">Bulk Schedule</h4>
          <p className="text-sm text-gray-600">Schedule multiple posts at once</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Clock className="w-6 h-6 text-purple-600" />
          </div>
          <h4 className="font-semibold text-gray-900 mb-2">Best Time to Post</h4>
          <p className="text-sm text-gray-600">AI-powered timing suggestions</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <h4 className="font-semibold text-gray-900 mb-2">Auto-Schedule</h4>
          <p className="text-sm text-gray-600">Let AI schedule your content</p>
        </div>
      </div>
    </div>
  )
}

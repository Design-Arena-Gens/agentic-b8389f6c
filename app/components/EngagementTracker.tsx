'use client'

import { useState } from 'react'
import { MessageSquare, Heart, Share2, Eye, TrendingUp, Users, Reply, CheckCheck } from 'lucide-react'

export default function EngagementTracker() {
  const engagementData = [
    {
      id: 1,
      platform: 'Instagram',
      post: 'Health tips for winter wellness',
      date: '2025-11-08',
      likes: 1243,
      comments: 87,
      shares: 156,
      views: 8542,
      color: 'bg-pink-500',
    },
    {
      id: 2,
      platform: 'Facebook',
      post: 'New telehealth service announcement',
      date: '2025-11-07',
      likes: 892,
      comments: 124,
      shares: 234,
      views: 12340,
      color: 'bg-blue-600',
    },
    {
      id: 3,
      platform: 'Twitter',
      post: 'Mental health awareness thread',
      date: '2025-11-07',
      likes: 2341,
      comments: 167,
      shares: 567,
      views: 15678,
      color: 'bg-sky-500',
    },
    {
      id: 4,
      platform: 'LinkedIn',
      post: 'Healthcare industry insights',
      date: '2025-11-06',
      likes: 543,
      comments: 89,
      shares: 123,
      views: 7865,
      color: 'bg-blue-700',
    },
  ]

  const comments = [
    {
      id: 1,
      platform: 'Instagram',
      user: 'Priya Sharma',
      comment: 'This is exactly what I needed! Thank you for sharing these health tips.',
      time: '2 hours ago',
      replied: false,
    },
    {
      id: 2,
      platform: 'Facebook',
      user: 'Rahul Verma',
      comment: 'Is the telehealth service available in all cities?',
      time: '3 hours ago',
      replied: false,
    },
    {
      id: 3,
      platform: 'Twitter',
      user: 'Anjali Gupta',
      comment: 'Great thread! Mental health awareness is so important.',
      time: '5 hours ago',
      replied: true,
    },
    {
      id: 4,
      platform: 'LinkedIn',
      user: 'Dr. Amit Patel',
      comment: 'Excellent insights on digital transformation in healthcare.',
      time: '1 day ago',
      replied: true,
    },
    {
      id: 5,
      platform: 'Instagram',
      user: 'Sneha Reddy',
      comment: 'Can you share more tips on immune system boosting?',
      time: '6 hours ago',
      replied: false,
    },
  ]

  const [commentsList, setCommentsList] = useState(comments)

  const handleReply = (id: number) => {
    setCommentsList(
      commentsList.map((comment) =>
        comment.id === id ? { ...comment, replied: true } : comment
      )
    )
  }

  return (
    <div className="space-y-6">
      {/* Engagement Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Likes', value: '5.2K', icon: Heart, color: 'text-red-600', bg: 'bg-red-100' },
          { label: 'Comments', value: '467', icon: MessageSquare, color: 'text-blue-600', bg: 'bg-blue-100' },
          { label: 'Shares', value: '1.1K', icon: Share2, color: 'text-green-600', bg: 'bg-green-100' },
          { label: 'Total Reach', value: '44.4K', icon: Eye, color: 'text-purple-600', bg: 'bg-purple-100' },
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-primary">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2 text-green-600 text-sm">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>+12.5%</span>
                </div>
              </div>
              <div className={`${stat.bg} p-3 rounded-lg`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Post Performance */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-primary" />
          Recent Post Performance
        </h3>
        <div className="space-y-4">
          {engagementData.map((post) => (
            <div
              key={post.id}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`${post.color} text-white text-xs font-semibold px-3 py-1 rounded`}>
                      {post.platform}
                    </span>
                    <span className="text-sm text-gray-600">{post.date}</span>
                  </div>
                  <p className="text-gray-900 font-medium mb-3">{post.post}</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <Heart className="w-5 h-5 text-red-600 mx-auto mb-1" />
                  <p className="text-lg font-bold text-gray-900">{post.likes}</p>
                  <p className="text-xs text-gray-600">Likes</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                  <p className="text-lg font-bold text-gray-900">{post.comments}</p>
                  <p className="text-xs text-gray-600">Comments</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <Share2 className="w-5 h-5 text-green-600 mx-auto mb-1" />
                  <p className="text-lg font-bold text-gray-900">{post.shares}</p>
                  <p className="text-xs text-gray-600">Shares</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <Eye className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                  <p className="text-lg font-bold text-gray-900">{post.views}</p>
                  <p className="text-xs text-gray-600">Views</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comments Management */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <MessageSquare className="w-5 h-5 mr-2 text-primary" />
            Recent Comments & Engagement
          </h3>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
              Auto-Reply ON
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {commentsList.map((comment) => (
            <div
              key={comment.id}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      comment.platform === 'Instagram' ? 'bg-pink-100 text-pink-700' :
                      comment.platform === 'Facebook' ? 'bg-blue-100 text-blue-700' :
                      comment.platform === 'Twitter' ? 'bg-sky-100 text-sky-700' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {comment.platform}
                    </span>
                    <span className="font-semibold text-gray-900">{comment.user}</span>
                    <span className="text-sm text-gray-500">{comment.time}</span>
                  </div>
                  <p className="text-gray-700 mb-3">{comment.comment}</p>
                  {comment.replied && (
                    <div className="flex items-center text-green-600 text-sm">
                      <CheckCheck className="w-4 h-4 mr-1" />
                      <span>Replied</span>
                    </div>
                  )}
                </div>
                {!comment.replied && (
                  <button
                    onClick={() => handleReply(comment.id)}
                    className="ml-4 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-secondary transition-colors flex items-center space-x-1"
                  >
                    <Reply className="w-4 h-4" />
                    <span>Reply</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg p-6 text-white">
        <h3 className="text-xl font-bold mb-3 flex items-center">
          <Users className="w-6 h-6 mr-2" />
          Engagement Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <p className="font-semibold mb-2">🔥 Top Performing Content</p>
            <p className="text-sm opacity-90">Mental health awareness posts receive 2.5x more engagement than average</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <p className="font-semibold mb-2">💬 Response Rate</p>
            <p className="text-sm opacity-90">Your average response time is 2.3 hours - 45% faster than industry average</p>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { TrendingUp, BarChart3, PieChart, Activity, Download, Calendar } from 'lucide-react'

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('week')

  const platformStats = [
    { platform: 'Instagram', followers: 12540, growth: '+12.5%', engagement: '4.2%', color: 'bg-pink-500' },
    { platform: 'Facebook', followers: 8920, growth: '+8.3%', engagement: '3.8%', color: 'bg-blue-600' },
    { platform: 'Twitter', followers: 15670, growth: '+15.2%', engagement: '5.1%', color: 'bg-sky-500' },
    { platform: 'LinkedIn', followers: 6780, growth: '+10.8%', engagement: '3.5%', color: 'bg-blue-700' },
  ]

  const weeklyData = [
    { day: 'Mon', posts: 4, engagement: 850 },
    { day: 'Tue', posts: 3, engagement: 920 },
    { day: 'Wed', posts: 5, engagement: 1240 },
    { day: 'Thu', posts: 4, engagement: 1050 },
    { day: 'Fri', posts: 6, engagement: 1580 },
    { day: 'Sat', posts: 3, engagement: 720 },
    { day: 'Sun', posts: 2, engagement: 640 },
  ]

  const contentPerformance = [
    { type: 'Health Tips', posts: 45, avgEngagement: 1250, reach: 18500 },
    { type: 'Service Announcements', posts: 28, avgEngagement: 890, reach: 12300 },
    { type: 'Patient Stories', posts: 32, avgEngagement: 1680, reach: 22100 },
    { type: 'Wellness Advice', posts: 38, avgEngagement: 1120, reach: 15600 },
    { type: 'Industry News', posts: 13, avgEngagement: 720, reach: 9800 },
  ]

  const maxEngagement = Math.max(...weeklyData.map((d) => d.engagement))

  return (
    <div className="space-y-6">
      {/* Header with Time Range Selector */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <BarChart3 className="w-6 h-6 mr-2 text-primary" />
            Analytics Dashboard
          </h2>
          <div className="flex items-center space-x-2">
            {['week', 'month', 'quarter', 'year'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  timeRange === range
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Performance */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-primary" />
          Platform Performance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {platformStats.map((stat, index) => (
            <div key={index} className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className={`${stat.color} text-white text-xs font-semibold px-3 py-1 rounded`}>
                  {stat.platform}
                </span>
                <span className="text-green-600 text-sm font-semibold">{stat.growth}</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.followers.toLocaleString()}</p>
              <p className="text-sm text-gray-600 mb-2">Followers</p>
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-600">Engagement Rate</p>
                <p className="text-lg font-bold text-primary">{stat.engagement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Engagement Chart */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-primary" />
          Weekly Engagement Trend
        </h3>
        <div className="space-y-4">
          {weeklyData.map((data, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="w-12 text-sm font-medium text-gray-700">{data.day}</span>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-full rounded-full flex items-center justify-end pr-2"
                      style={{ width: `${(data.engagement / maxEngagement) * 100}%` }}
                    >
                      <span className="text-xs font-semibold text-white">{data.engagement}</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-600 w-16">
                    {data.posts} {data.posts === 1 ? 'post' : 'posts'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Performance */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <PieChart className="w-5 h-5 mr-2 text-primary" />
          Content Type Performance
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Content Type</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">Posts</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">Avg Engagement</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">Total Reach</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-700">Performance</th>
              </tr>
            </thead>
            <tbody>
              {contentPerformance.map((content, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{content.type}</td>
                  <td className="py-3 px-4 text-center text-gray-700">{content.posts}</td>
                  <td className="py-3 px-4 text-center font-semibold text-primary">
                    {content.avgEngagement.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-700">
                    {content.reach.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{
                            width: `${(content.avgEngagement / 1680) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Metrics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-md p-6 text-white">
          <h4 className="text-lg font-semibold mb-2">Total Impressions</h4>
          <p className="text-4xl font-bold mb-2">1.2M</p>
          <div className="flex items-center text-blue-100">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="text-sm">+18.5% from last period</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-md p-6 text-white">
          <h4 className="text-lg font-semibold mb-2">Engagement Rate</h4>
          <p className="text-4xl font-bold mb-2">4.2%</p>
          <div className="flex items-center text-purple-100">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="text-sm">+0.8% from last period</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-md p-6 text-white">
          <h4 className="text-lg font-semibold mb-2">Follower Growth</h4>
          <p className="text-4xl font-bold mb-2">+5.2K</p>
          <div className="flex items-center text-green-100">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="text-sm">+12.3% from last period</span>
          </div>
        </div>
      </div>

      {/* Export Reports */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Export Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center space-x-2 px-6 py-4 border-2 border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">
            <Download className="w-5 h-5 text-primary" />
            <span className="font-medium text-gray-900">Weekly Report</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-6 py-4 border-2 border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">
            <Download className="w-5 h-5 text-primary" />
            <span className="font-medium text-gray-900">Monthly Report</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-6 py-4 border-2 border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">
            <Download className="w-5 h-5 text-primary" />
            <span className="font-medium text-gray-900">Custom Report</span>
          </button>
        </div>
      </div>
    </div>
  )
}

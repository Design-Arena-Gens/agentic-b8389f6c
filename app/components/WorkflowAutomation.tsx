'use client'

import { useState } from 'react'
import { Zap, RefreshCw, Bot, CheckCircle, Settings, Play, Pause, Plus } from 'lucide-react'

export default function WorkflowAutomation() {
  const [workflows, setWorkflows] = useState([
    {
      id: 1,
      name: 'Auto-Schedule Content',
      description: 'Automatically schedule generated content at optimal times',
      status: 'active',
      triggers: 'When new content is generated',
      actions: 'Schedule post at best time',
      runs: 156,
    },
    {
      id: 2,
      name: 'Engagement Auto-Reply',
      description: 'Automatically reply to common comments and questions',
      status: 'active',
      triggers: 'When comment is received',
      actions: 'Send contextual AI reply',
      runs: 423,
    },
    {
      id: 3,
      name: 'Weekly Report Generation',
      description: 'Generate and email weekly performance reports',
      status: 'active',
      triggers: 'Every Monday at 9 AM',
      actions: 'Create report and send email',
      runs: 24,
    },
    {
      id: 4,
      name: 'Content Approval Workflow',
      description: 'Send generated content for approval before posting',
      status: 'paused',
      triggers: 'When content is generated',
      actions: 'Send notification for approval',
      runs: 89,
    },
    {
      id: 5,
      name: 'Trend Monitoring',
      description: 'Monitor healthcare trends and suggest content topics',
      status: 'active',
      triggers: 'Daily at 8 AM',
      actions: 'Analyze trends and create suggestions',
      runs: 67,
    },
  ])

  const toggleWorkflow = (id: number) => {
    setWorkflows(
      workflows.map((w) =>
        w.id === id
          ? { ...w, status: w.status === 'active' ? 'paused' : 'active' }
          : w
      )
    )
  }

  const workflowTemplates = [
    {
      name: 'Content Recycling',
      description: 'Automatically reshare top-performing posts after 30 days',
      icon: RefreshCw,
    },
    {
      name: 'Hashtag Optimization',
      description: 'Suggest and add trending hashtags to posts',
      icon: Zap,
    },
    {
      name: 'Cross-Platform Posting',
      description: 'Automatically adapt and post content across all platforms',
      icon: Bot,
    },
  ]

  const recentActivity = [
    { action: 'Auto-replied to 12 comments', workflow: 'Engagement Auto-Reply', time: '10 min ago', status: 'success' },
    { action: 'Scheduled 3 posts for optimal times', workflow: 'Auto-Schedule Content', time: '1 hour ago', status: 'success' },
    { action: 'Generated weekly performance report', workflow: 'Weekly Report Generation', time: '2 hours ago', status: 'success' },
    { action: 'Detected trending topic: Winter Wellness', workflow: 'Trend Monitoring', time: '3 hours ago', status: 'success' },
    { action: 'Sent 5 posts for approval', workflow: 'Content Approval Workflow', time: '5 hours ago', status: 'pending' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-primary" />
              Workflow Automation
            </h2>
            <p className="text-gray-600 mt-1">Automate your social media management tasks</p>
          </div>
          <button className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Create Workflow</span>
          </button>
        </div>
      </div>

      {/* Active Workflows */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Bot className="w-5 h-5 mr-2 text-primary" />
          Active Workflows
        </h3>
        <div className="space-y-4">
          {workflows.map((workflow) => (
            <div
              key={workflow.id}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{workflow.name}</h4>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        workflow.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {workflow.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{workflow.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-blue-900 mb-1">TRIGGER</p>
                      <p className="text-sm text-blue-800">{workflow.triggers}</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-xs font-semibold text-purple-900 mb-1">ACTION</p>
                      <p className="text-sm text-purple-800">{workflow.actions}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
                      {workflow.runs} successful runs
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2 ml-4">
                  <button
                    onClick={() => toggleWorkflow(workflow.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      workflow.status === 'active'
                        ? 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                        : 'bg-green-100 text-green-600 hover:bg-green-200'
                    }`}
                  >
                    {workflow.status === 'active' ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow Templates */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Workflow Templates</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {workflowTemplates.map((template, index) => (
            <div
              key={index}
              className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 cursor-pointer transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <template.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{template.name}</h4>
              <p className="text-sm text-gray-600 mb-4">{template.description}</p>
              <button className="w-full bg-primary text-white font-medium py-2 rounded-lg hover:bg-secondary transition-colors text-sm">
                Use Template
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <RefreshCw className="w-5 h-5 mr-2 text-primary" />
          Recent Automation Activity
        </h3>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
            >
              <div
                className={`mt-1 w-2 h-2 rounded-full ${
                  activity.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                }`}
              ></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <p className="text-xs text-gray-600 mt-1">
                  {activity.workflow} • {activity.time}
                </p>
              </div>
              <span
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  activity.status === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Automation Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-md p-6 text-white">
          <p className="text-sm font-medium mb-1 opacity-90">Total Workflows</p>
          <p className="text-3xl font-bold">{workflows.length}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-md p-6 text-white">
          <p className="text-sm font-medium mb-1 opacity-90">Active</p>
          <p className="text-3xl font-bold">
            {workflows.filter((w) => w.status === 'active').length}
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-md p-6 text-white">
          <p className="text-sm font-medium mb-1 opacity-90">Total Runs</p>
          <p className="text-3xl font-bold">
            {workflows.reduce((sum, w) => sum + w.runs, 0)}
          </p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-md p-6 text-white">
          <p className="text-sm font-medium mb-1 opacity-90">Time Saved</p>
          <p className="text-3xl font-bold">42h</p>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg p-6 text-white">
        <h3 className="text-xl font-bold mb-3 flex items-center">
          <Bot className="w-6 h-6 mr-2" />
          AI Automation Suggestions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <p className="font-semibold mb-2">💡 Suggested Workflow</p>
            <p className="text-sm opacity-90">
              Create an auto-response workflow for frequently asked questions about services
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <p className="font-semibold mb-2">⚡ Optimization Tip</p>
            <p className="text-sm opacity-90">
              Enable cross-platform posting to save 3-4 hours per week on content distribution
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

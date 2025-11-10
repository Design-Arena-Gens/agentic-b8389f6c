'use client'

import { useState } from 'react'
import { Send, Sparkles, Copy, RefreshCw, Image, Hash, AtSign } from 'lucide-react'

export default function ContentGenerator() {
  const [prompt, setPrompt] = useState('')
  const [platform, setPlatform] = useState('instagram')
  const [tone, setTone] = useState('professional')
  const [generating, setGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<any>(null)

  const platforms = [
    { id: 'instagram', name: 'Instagram', color: 'bg-pink-500' },
    { id: 'facebook', name: 'Facebook', color: 'bg-blue-600' },
    { id: 'twitter', name: 'Twitter', color: 'bg-sky-500' },
    { id: 'linkedin', name: 'LinkedIn', color: 'bg-blue-700' },
  ]

  const tones = ['Professional', 'Friendly', 'Informative', 'Inspirational', 'Urgent']

  const handleGenerate = async () => {
    setGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      const content = {
        instagram: {
          caption: `🌟 Transform Your Health Journey with Bharat Life Care! 🌟\n\n${prompt || 'Discover comprehensive healthcare solutions tailored just for you.'}\n\nAt Bharat Life Care, we believe in:\n✨ Holistic wellness approaches\n💚 Patient-centered care\n🏥 State-of-the-art facilities\n👨‍⚕️ Expert medical professionals\n\nYour health is our priority. Let's build a healthier tomorrow together!\n\n#BharatLifeCare #Healthcare #Wellness #HealthyLiving #PatientCare #MedicalExcellence #HealthcareIndia #WellnessJourney #HealthFirst #QualityCare`,
          hashtags: ['#BharatLifeCare', '#Healthcare', '#Wellness', '#HealthyLiving', '#PatientCare'],
          imagePrompt: 'Healthcare professional smiling with patient, modern medical facility, warm lighting',
        },
        facebook: {
          post: `🏥 Bharat Life Care - Your Partner in Health & Wellness 🏥\n\n${prompt || 'We are committed to providing exceptional healthcare services to our community.'}\n\nWhat sets us apart:\n\n🔹 Comprehensive medical services\n🔹 Experienced healthcare professionals\n🔹 Patient-first approach\n🔹 Modern diagnostic facilities\n🔹 Affordable quality care\n\nSchedule your appointment today and experience healthcare that truly cares!\n\n📞 Call us: 1800-XXX-XXXX\n🌐 Visit: www.bharatlifecare.com\n\n#BharatLifeCare #HealthcareServices #PatientCare #Wellness`,
          cta: 'Book Appointment',
        },
        twitter: {
          tweet: `🌟 ${prompt || 'Quality healthcare that puts YOU first!'}\n\nAt Bharat Life Care, we combine expertise with compassion to deliver exceptional patient care.\n\n✅ Expert doctors\n✅ Modern facilities\n✅ Affordable care\n\nYour health journey starts here. 💚\n\n#BharatLifeCare #Healthcare #Wellness`,
          thread: [
            'At Bharat Life Care, we understand that your health is your greatest asset. 🏥',
            'That\'s why we offer comprehensive healthcare services under one roof. 🩺',
            'From preventive care to specialized treatments, we\'re here for you every step of the way. 💙',
          ],
        },
        linkedin: {
          post: `Advancing Healthcare Excellence at Bharat Life Care\n\n${prompt || 'As a leading healthcare provider, we are committed to transforming patient care through innovation and compassion.'}\n\nOur approach encompasses:\n\n• Evidence-based medical practices\n• Patient-centered care delivery\n• Continuous quality improvement\n• Community health initiatives\n• Professional development for our staff\n\nAt Bharat Life Care, we don't just treat illnesses—we partner with our patients to achieve optimal health outcomes.\n\nJoin us in our mission to make quality healthcare accessible to all.\n\n#Healthcare #PatientCare #MedicalExcellence #BharatLifeCare #HealthcareInnovation`,
        },
      }

      setGeneratedContent(content[platform as keyof typeof content])
      setGenerating(false)
    }, 2000)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('Copied to clipboard!')
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Sparkles className="w-6 h-6 mr-2 text-primary" />
          AI Content Generator
        </h2>

        {/* Platform Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">Select Platform</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {platforms.map((p) => (
              <button
                key={p.id}
                onClick={() => setPlatform(p.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  platform === p.id
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-10 h-10 ${p.color} rounded-lg mx-auto mb-2`}></div>
                <span className="text-sm font-medium text-gray-900">{p.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tone Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">Content Tone</label>
          <div className="flex flex-wrap gap-2">
            {tones.map((t) => (
              <button
                key={t}
                onClick={() => setTone(t.toLowerCase())}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  tone === t.toLowerCase()
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Prompt Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Content Topic or Description (Optional)
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="E.g., Promote our new telehealth service launching next week..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            rows={4}
          />
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={generating}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center space-x-2"
        >
          {generating ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>Generate Content</span>
            </>
          )}
        </button>
      </div>

      {/* Generated Content Display */}
      {generatedContent && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">Generated Content</h3>
            <button
              onClick={handleGenerate}
              className="text-primary hover:text-secondary transition-colors flex items-center space-x-1"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm font-medium">Regenerate</span>
            </button>
          </div>

          {platform === 'instagram' && (
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border border-pink-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700">Caption</span>
                  <button
                    onClick={() => copyToClipboard(generatedContent.caption)}
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <p className="whitespace-pre-wrap text-sm text-gray-800">{generatedContent.caption}</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700 flex items-center">
                    <Image className="w-4 h-4 mr-2" />
                    Image Suggestion
                  </span>
                </div>
                <p className="text-sm text-gray-700">{generatedContent.imagePrompt}</p>
              </div>
            </div>
          )}

          {platform === 'facebook' && (
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700">Post</span>
                  <button
                    onClick={() => copyToClipboard(generatedContent.post)}
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <p className="whitespace-pre-wrap text-sm text-gray-800">{generatedContent.post}</p>
                <div className="mt-3 pt-3 border-t border-blue-200">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded">
                    {generatedContent.cta}
                  </span>
                </div>
              </div>
            </div>
          )}

          {platform === 'twitter' && (
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-sky-50 to-cyan-50 rounded-lg border border-sky-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700">Tweet</span>
                  <button
                    onClick={() => copyToClipboard(generatedContent.tweet)}
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <p className="whitespace-pre-wrap text-sm text-gray-800">{generatedContent.tweet}</p>
              </div>

              <div className="p-4 bg-sky-50 rounded-lg border border-sky-200">
                <span className="text-sm font-semibold text-gray-700 mb-3 block">Thread Option</span>
                <div className="space-y-2">
                  {generatedContent.thread.map((tweet: string, idx: number) => (
                    <div key={idx} className="p-3 bg-white rounded border border-sky-200">
                      <span className="text-xs font-semibold text-sky-600 mb-1 block">{idx + 1}/{generatedContent.thread.length}</span>
                      <p className="text-sm text-gray-800">{tweet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {platform === 'linkedin' && (
            <div className="p-4 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-700">Professional Post</span>
                <button
                  onClick={() => copyToClipboard(generatedContent.post)}
                  className="text-primary hover:text-secondary transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <p className="whitespace-pre-wrap text-sm text-gray-800">{generatedContent.post}</p>
            </div>
          )}

          <div className="flex space-x-3 mt-6">
            <button className="flex-1 bg-primary text-white font-semibold py-3 rounded-lg hover:bg-secondary transition-colors flex items-center justify-center space-x-2">
              <Send className="w-5 h-5" />
              <span>Schedule Post</span>
            </button>
            <button className="flex-1 border-2 border-primary text-primary font-semibold py-3 rounded-lg hover:bg-primary/5 transition-colors">
              Save Draft
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

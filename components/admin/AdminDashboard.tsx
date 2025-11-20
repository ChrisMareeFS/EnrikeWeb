'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import GlassCard from '@/components/GlassCard';

interface Content {
  hero: any;
  about: any;
  services: any;
  featuredContent: any;
}

export default function AdminDashboard() {
  const [content, setContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');
  const router = useRouter();

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const response = await fetch('/api/content');
      const data = await response.json();
      setContent(data);
    } catch (error) {
      console.error('Failed to load content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  const handleSave = async () => {
    if (!content) return;

    setSaving(true);
    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });

      if (response.ok) {
        alert('Content saved successfully!');
      } else {
        alert('Failed to save content');
      }
    } catch (error) {
      alert('Error saving content');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-soft-white">Loading...</div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-soft-white">Failed to load content</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-soft-white">
            Admin Dashboard
          </h1>
          <Button onClick={handleLogout} variant="secondary">
            Logout
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['hero', 'about', 'services', 'featuredContent'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === tab
                  ? 'bg-beige-warm text-charcoal'
                  : 'bg-white/10 text-soft-white hover:bg-white/20'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Editor */}
        <GlassCard className="p-6 md:p-8" variant="dark">
          {activeTab === 'hero' && (
            <HeroEditor content={content.hero} setContent={setContent} />
          )}
          {activeTab === 'about' && (
            <AboutEditor content={content.about} setContent={setContent} />
          )}
          {activeTab === 'services' && (
            <ServicesEditor content={content.services} setContent={setContent} />
          )}
          {activeTab === 'featuredContent' && (
            <FeaturedContentEditor
              content={content.featuredContent}
              setContent={setContent}
            />
          )}

          <div className="mt-6 pt-6 border-t border-white/20">
            <Button onClick={handleSave} variant="primary" disabled={saving}>
              {saving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

// Hero Editor Component
function HeroEditor({ content, setContent }: any) {
  const updateField = (field: string, value: any) => {
    setContent((prev: any) => ({
      ...prev,
      hero: { ...prev.hero, [field]: value },
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif text-beige-warm mb-4">Hero Section</h2>

      <div>
        <label className="block text-sm font-medium text-soft-white/80 mb-2">
          Title Line 1
        </label>
        <input
          type="text"
          value={content.title1}
          onChange={(e) => updateField('title1', e.target.value)}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-soft-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-soft-white/80 mb-2">
          Title Line 2
        </label>
        <input
          type="text"
          value={content.title2}
          onChange={(e) => updateField('title2', e.target.value)}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-soft-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-soft-white/80 mb-2">
          Description
        </label>
        <textarea
          value={content.description}
          onChange={(e) => updateField('description', e.target.value)}
          rows={4}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-soft-white"
        />
      </div>

      <ImageUploader
        label="Background Image"
        currentImage={content.backgroundImage}
        onImageChange={(url) => updateField('backgroundImage', url)}
      />

      <div>
        <label className="block text-sm font-medium text-soft-white/80 mb-2">
          Background Position (e.g., center_20%)
        </label>
        <input
          type="text"
          value={content.backgroundPosition}
          onChange={(e) => updateField('backgroundPosition', e.target.value)}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-soft-white"
        />
      </div>
    </div>
  );
}

// About Editor Component
function AboutEditor({ content, setContent }: any) {
  const updateField = (field: string, value: any) => {
    setContent((prev: any) => ({
      ...prev,
      about: { ...prev.about, [field]: value },
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif text-beige-warm mb-4">About Section</h2>

      <div>
        <label className="block text-sm font-medium text-soft-white/80 mb-2">
          Title
        </label>
        <input
          type="text"
          value={content.title}
          onChange={(e) => updateField('title', e.target.value)}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-soft-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-soft-white/80 mb-2">
          Description
        </label>
        <textarea
          value={content.description}
          onChange={(e) => updateField('description', e.target.value)}
          rows={8}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-soft-white"
        />
      </div>

      <ImageUploader
        label="Background Image"
        currentImage={content.backgroundImage}
        onImageChange={(url) => updateField('backgroundImage', url)}
      />

      <div>
        <label className="block text-sm font-medium text-soft-white/80 mb-2">
          Background Position
        </label>
        <input
          type="text"
          value={content.backgroundPosition}
          onChange={(e) => updateField('backgroundPosition', e.target.value)}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-soft-white"
        />
      </div>
    </div>
  );
}

// Services Editor Component
function ServicesEditor({ content, setContent }: any) {
  const updateField = (field: string, value: any) => {
    setContent((prev: any) => ({
      ...prev,
      services: { ...prev.services, [field]: value },
    }));
  };

  const updateService = (index: number, field: string, value: any) => {
    setContent((prev: any) => {
      const newServices = [...prev.services.items];
      newServices[index] = { ...newServices[index], [field]: value };
      return {
        ...prev,
        services: { ...prev.services, items: newServices },
      };
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif text-beige-warm mb-4">
        Services Section
      </h2>

      <div>
        <label className="block text-sm font-medium text-soft-white/80 mb-2">
          Title
        </label>
        <input
          type="text"
          value={content.title}
          onChange={(e) => updateField('title', e.target.value)}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-soft-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-soft-white/80 mb-2">
          Subtitle
        </label>
        <input
          type="text"
          value={content.subtitle}
          onChange={(e) => updateField('subtitle', e.target.value)}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-soft-white"
        />
      </div>

      <ImageUploader
        label="Background Image"
        currentImage={content.backgroundImage}
        onImageChange={(url) => updateField('backgroundImage', url)}
      />

      <div>
        <h3 className="text-xl font-serif text-beige-warm mb-4">Services</h3>
        {content.items.map((service: any, index: number) => (
          <div key={index} className="mb-6 p-4 bg-white/5 rounded-lg">
            <div className="mb-4">
              <label className="block text-sm font-medium text-soft-white/80 mb-2">
                Service {index + 1} - Title
              </label>
              <input
                type="text"
                value={service.title}
                onChange={(e) => updateService(index, 'title', e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-soft-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-soft-white/80 mb-2">
                Description
              </label>
              <textarea
                value={service.description}
                onChange={(e) =>
                  updateService(index, 'description', e.target.value)
                }
                rows={3}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-soft-white"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Featured Content Editor Component
function FeaturedContentEditor({ content, setContent }: any) {
  const updateField = (field: string, value: any) => {
    setContent((prev: any) => ({
      ...prev,
      featuredContent: { ...prev.featuredContent, [field]: value },
    }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif text-beige-warm mb-4">
        Featured Content Section
      </h2>

      <div>
        <label className="block text-sm font-medium text-soft-white/80 mb-2">
          Title
        </label>
        <input
          type="text"
          value={content.title}
          onChange={(e) => updateField('title', e.target.value)}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-soft-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-soft-white/80 mb-2">
          Subtitle
        </label>
        <input
          type="text"
          value={content.subtitle}
          onChange={(e) => updateField('subtitle', e.target.value)}
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-soft-white"
        />
      </div>

      <ImageUploader
        label="Background Image"
        currentImage={content.backgroundImage}
        onImageChange={(url) => updateField('backgroundImage', url)}
      />
    </div>
  );
}

// Image Uploader Component
function ImageUploader({
  label,
  currentImage,
  onImageChange,
}: {
  label: string;
  currentImage: string;
  onImageChange: (url: string) => void;
}) {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        onImageChange(data.filename);
      } else {
        alert('Failed to upload image');
      }
    } catch (error) {
      alert('Error uploading image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-soft-white/80 mb-2">
        {label}
      </label>
      {currentImage && (
        <div className="mb-2">
          <img
            src={currentImage}
            alt="Current"
            className="max-w-xs h-32 object-cover rounded-lg"
          />
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={uploading}
        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-soft-white text-sm"
      />
      {uploading && (
        <p className="text-sm text-soft-white/60 mt-2">Uploading...</p>
      )}
      <input
        type="text"
        value={currentImage}
        onChange={(e) => onImageChange(e.target.value)}
        placeholder="/images/example.jpg"
        className="w-full mt-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-soft-white text-sm"
      />
    </div>
  );
}


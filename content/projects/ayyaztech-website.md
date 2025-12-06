---
title: AyyazTech.com
slug: ayyaztech-website
status: active
type: product
description: Blog and content platform supporting the AyyazTech YouTube channel
longDescription: A Laravel-powered blog that automatically syncs with YouTube content through n8n automation, featuring API-driven content management and zero-downtime deployments.
tech:
  - Laravel
  - Filament
  - PostgreSQL
  - n8n
  - Sanctum
url: https://ayyaztech.com
started: "2024"
featured: false
order: 5
---

## About AyyazTech.com

The companion website to my YouTube channel. It serves as a blog where video content is automatically cross-posted for SEO benefits and discoverability through Google Search.

## Technical Highlights

### API-Driven Content Management
Built a custom REST API that integrates with n8n workflows:
- Automatic video-to-blog-post conversion
- AI-powered tag and category suggestions
- Duplicate detection to prevent re-posting

### Automation Pipeline
When a video goes live on YouTube:
1. n8n workflow detects the new video
2. AI suggests relevant tags and categories
3. Blog post is created automatically via API
4. Notion database is updated with the blog URL

### Infrastructure
- **Deployment:** Zero-downtime via Laravel Envoyer
- **Hosting:** Laravel Forge on DigitalOcean
- **Backups:** Automated daily backups to S3
- **Admin:** Filament admin panel for content management

## Why I Built It

YouTube is great for reach, but Google Search brings a different audience. By automatically syncing video content to a blog, I capture both — without any manual effort after the initial setup.

import CreatorAvatar from '@/components/template-center/creator-avatar';
import { TemplateSummary, TemplateCategory } from '@/lib/interface';
import Link from 'next/link';
import React, { useMemo } from 'react';

function TemplateItem({ template, category }: { template: TemplateSummary; category?: TemplateCategory }) {
  const iframeUrl = useMemo(() => {
    const url = new URL(template.view_url);

    url.searchParams.delete('v');
    url.searchParams.set('theme', 'light');
    url.searchParams.set('template', 'true');
    url.searchParams.set('thumbnail', 'true');
    return url.toString();
  }, [template.view_url]);

  return (
    <>
      <Link
        href={`/templates/${category?.id || 'categories'}/${template.view_id}`}
        className={'template-preview relative overflow-hidden'}
        style={{
          backgroundColor: category?.bg_color,
        }}
      >
        <iframe loading={'lazy'} src={iframeUrl} />

        <div className={'iframe-shadow'} />
      </Link>
      <div className={'template-info'}>
        <div className={'template-creator'}>
          <CreatorAvatar src={template.creator.avatar_url} name={template.creator.name} />
          <div className={'right-info'}>
            <div className={'template-name'}>{template.name}</div>
            <div className={'creator-name'}>by {template.creator.name}</div>
          </div>
        </div>

        <div className={'template-desc'}>{template.description}</div>
      </div>
    </>
  );
}

export default TemplateItem;

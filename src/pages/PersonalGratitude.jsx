import React from 'react';
import { asset } from '../utils/asset';

const pageImage = asset('/pdf-pages/PERSONAL_GRATITUDE_and_SINCERE_THANKS_page_1.png');

export default function PersonalGratitude() {
  return (
    <section
      aria-label="Personal Gratitude & Sincere Thanks"
      style={{
        background: '#ffffff',
        width: '100%'
      }}
    >
      <div style={{ lineHeight: 0, width: '100%' }}>
        <img
          src={pageImage}
          alt="Personal Gratitude & Sincere Thanks PDF design"
          loading="eager"
          decoding="async"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto'
          }}
        />
      </div>
    </section>
  );
}

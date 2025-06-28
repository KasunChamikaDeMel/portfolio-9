// NavMenu.tsx
import React from 'react';

export function NavMenu({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ margin: '2rem 0' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{title}</h2>
      {children}
    </section>
  );
}

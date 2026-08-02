import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F4EBD8',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '10px 24px',
            borderRadius: 999,
            border: '4px solid #1F1A16',
            backgroundColor: '#FDCB40',
            fontSize: 28,
            fontWeight: 700,
            color: '#1F1A16',
            marginBottom: 32,
          }}
        >
          👋 Hi, I&apos;m Irsyad
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#1F1A16',
            marginBottom: 24,
          }}
        >
          Irsyad Muhamad Firdaus
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 40,
            fontWeight: 700,
            color: '#fff',
            backgroundColor: '#E84C88',
            border: '4px solid #1F1A16',
            borderRadius: 16,
            padding: '8px 28px',
          }}
        >
          Data Analyst
        </div>
      </div>
    ),
    { ...size },
  );
}

import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 100,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#c0a062',
          borderRadius: '20%', // Apple icons usually have rounded corners, but iOS masks them automatically. 
          // Using square or slight radius is fine.
        }}
      >
        KM
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
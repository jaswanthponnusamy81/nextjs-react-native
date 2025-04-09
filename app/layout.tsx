'use client';

import {Inter} from 'next/font/google';
import './../global.css';
import {GluestackUIProvider} from './../components/ui/gluestack-ui-provider';
const inter = Inter({subsets: ['latin']});
import StyledJsxRegistry from './../registry';
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{display: 'flex'}}>
        <StyledJsxRegistry>
          <GluestackUIProvider mode="light">{children}</GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}

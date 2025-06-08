// src/app/layout.js
import StyledComponentsRegistry from '../lib/registry';
import './globals.css';
import Header from '@/src/components/Header/Header'; // Import Header
import Footer from '@/src/components/Footer/Footer'; // Import Footer

export const metadata = {
  title: 'Chiar Abdi - Dev Blog',
  description: 'A blog about web development and technology.',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Header />
          <main>{children}</main> {/* The 'children' prop is where the page content will go */}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
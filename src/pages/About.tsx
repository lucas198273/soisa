import './About.css'; // novo css da página
import StudioAbout from '../components/StudioAbout/StudioAbout';
import ArtistaPreview from '../components/ArtistaPreview/ArtistaPreview';

export default function About() {
  return (
    <div>
      <StudioAbout />
      <ArtistaPreview />
    </div>
  );
}


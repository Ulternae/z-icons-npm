import React from 'react';

export interface BruGoogleScholarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGoogleScholar: React.FC<BruGoogleScholarProps>;
export default BruGoogleScholar;

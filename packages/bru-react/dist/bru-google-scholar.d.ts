import React from 'react';

export interface BruGoogleScholarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGoogleScholar(props: BruGoogleScholarProps): React.ReactElement;
export default BruGoogleScholar;

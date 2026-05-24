import React from 'react';

export interface BruGooglePlayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGooglePlay: React.FC<BruGooglePlayProps>;
export default BruGooglePlay;

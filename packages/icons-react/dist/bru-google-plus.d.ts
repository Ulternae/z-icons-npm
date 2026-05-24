import React from 'react';

export interface BruGooglePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGooglePlus: React.FC<BruGooglePlusProps>;
export default BruGooglePlus;

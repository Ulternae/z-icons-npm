import React from 'react';

export interface BruGooglePlusGProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGooglePlusG: React.FC<BruGooglePlusGProps>;
export default BruGooglePlusG;

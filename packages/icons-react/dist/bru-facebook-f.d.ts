import React from 'react';

export interface BruFacebookFProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFacebookF: React.FC<BruFacebookFProps>;
export default BruFacebookF;

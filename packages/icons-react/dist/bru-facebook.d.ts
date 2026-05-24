import React from 'react';

export interface BruFacebookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFacebook: React.FC<BruFacebookProps>;
export default BruFacebook;

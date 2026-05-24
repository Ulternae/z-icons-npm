import React from 'react';

export interface BruTwitterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruTwitter: React.FC<BruTwitterProps>;
export default BruTwitter;

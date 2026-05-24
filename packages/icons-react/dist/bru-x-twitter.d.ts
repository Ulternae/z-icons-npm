import React from 'react';

export interface BruXTwitterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruXTwitter: React.FC<BruXTwitterProps>;
export default BruXTwitter;

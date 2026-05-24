import React from 'react';

export interface BruSquareXTwitterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareXTwitter: React.FC<BruSquareXTwitterProps>;
export default BruSquareXTwitter;

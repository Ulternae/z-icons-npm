import React from 'react';

export interface BruPinterestProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPinterest: React.FC<BruPinterestProps>;
export default BruPinterest;

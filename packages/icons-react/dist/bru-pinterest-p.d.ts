import React from 'react';

export interface BruPinterestPProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPinterestP: React.FC<BruPinterestPProps>;
export default BruPinterestP;

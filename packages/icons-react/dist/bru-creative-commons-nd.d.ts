import React from 'react';

export interface BruCreativeCommonsNdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCreativeCommonsNd: React.FC<BruCreativeCommonsNdProps>;
export default BruCreativeCommonsNd;

import React from 'react';

export interface BruDeezerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDeezer: React.FC<BruDeezerProps>;
export default BruDeezer;

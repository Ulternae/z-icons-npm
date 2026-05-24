import React from 'react';

export interface BruOpenstreetmapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruOpenstreetmap: React.FC<BruOpenstreetmapProps>;
export default BruOpenstreetmap;

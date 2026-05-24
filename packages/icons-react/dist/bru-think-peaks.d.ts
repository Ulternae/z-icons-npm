import React from 'react';

export interface BruThinkPeaksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruThinkPeaks: React.FC<BruThinkPeaksProps>;
export default BruThinkPeaks;

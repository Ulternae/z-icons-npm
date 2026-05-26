import React from 'react';

export interface LanTally1Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally1: React.FC<LanTally1Props>;
export default LanTally1;

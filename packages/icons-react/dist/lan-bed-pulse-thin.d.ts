import React from 'react';

export interface LanBedPulseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedPulseThin: React.FC<LanBedPulseThinProps>;
export default LanBedPulseThin;

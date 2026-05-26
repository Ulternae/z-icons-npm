import React from 'react';

export interface LanHeartPulseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartPulseThin: React.FC<LanHeartPulseThinProps>;
export default LanHeartPulseThin;

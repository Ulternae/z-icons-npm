import React from 'react';

export interface LanMaleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaleThin: React.FC<LanMaleThinProps>;
export default LanMaleThin;

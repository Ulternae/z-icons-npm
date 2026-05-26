import React from 'react';

export interface LanChestnutThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChestnutThin: React.FC<LanChestnutThinProps>;
export default LanChestnutThin;

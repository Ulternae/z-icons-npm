import React from 'react';

export interface LanFlaskGearThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlaskGearThin: React.FC<LanFlaskGearThinProps>;
export default LanFlaskGearThin;

import React from 'react';

export interface LanBoothCurtainThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoothCurtainThin: React.FC<LanBoothCurtainThinProps>;
export default LanBoothCurtainThin;

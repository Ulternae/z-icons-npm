import React from 'react';

export interface LanBlockBrickFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlockBrickFireThin: React.FC<LanBlockBrickFireThinProps>;
export default LanBlockBrickFireThin;

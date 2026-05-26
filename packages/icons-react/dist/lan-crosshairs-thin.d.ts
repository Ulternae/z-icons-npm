import React from 'react';

export interface LanCrosshairsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrosshairsThin: React.FC<LanCrosshairsThinProps>;
export default LanCrosshairsThin;

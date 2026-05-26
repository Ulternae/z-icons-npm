import React from 'react';

export interface LanLocationCrosshairsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLocationCrosshairsThin: React.FC<LanLocationCrosshairsThinProps>;
export default LanLocationCrosshairsThin;

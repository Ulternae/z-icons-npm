import React from 'react';

export interface LanGlassCheersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassCheersThin: React.FC<LanGlassCheersThinProps>;
export default LanGlassCheersThin;

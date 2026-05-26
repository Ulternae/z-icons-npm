import React from 'react';

export interface LanGlassEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassEmptyThin: React.FC<LanGlassEmptyThinProps>;
export default LanGlassEmptyThin;

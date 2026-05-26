import React from 'react';

export interface LanBrushThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrushThin: React.FC<LanBrushThinProps>;
export default LanBrushThin;

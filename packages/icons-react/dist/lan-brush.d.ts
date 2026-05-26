import React from 'react';

export interface LanBrushProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrush: React.FC<LanBrushProps>;
export default LanBrush;

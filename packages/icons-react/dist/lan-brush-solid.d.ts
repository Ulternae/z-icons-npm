import React from 'react';

export interface LanBrushSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrushSolid: React.FC<LanBrushSolidProps>;
export default LanBrushSolid;

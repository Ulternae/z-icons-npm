import React from 'react';

export interface LanMarsStrokeVSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsStrokeVSolid: React.FC<LanMarsStrokeVSolidProps>;
export default LanMarsStrokeVSolid;

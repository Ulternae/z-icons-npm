import React from 'react';

export interface LanMarsStrokeHSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsStrokeHSolid: React.FC<LanMarsStrokeHSolidProps>;
export default LanMarsStrokeHSolid;

import React from 'react';

export interface LanToothbrushSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToothbrushSolid: React.FC<LanToothbrushSolidProps>;
export default LanToothbrushSolid;

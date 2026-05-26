import React from 'react';

export interface LanObjectsAlignBottomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectsAlignBottom: React.FC<LanObjectsAlignBottomProps>;
export default LanObjectsAlignBottom;

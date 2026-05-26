import React from 'react';

export interface LanObjectsAlignLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectsAlignLeft: React.FC<LanObjectsAlignLeftProps>;
export default LanObjectsAlignLeft;

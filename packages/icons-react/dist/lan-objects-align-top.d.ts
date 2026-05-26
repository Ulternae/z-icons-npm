import React from 'react';

export interface LanObjectsAlignTopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectsAlignTop: React.FC<LanObjectsAlignTopProps>;
export default LanObjectsAlignTop;

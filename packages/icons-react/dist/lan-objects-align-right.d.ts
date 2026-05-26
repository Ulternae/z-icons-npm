import React from 'react';

export interface LanObjectsAlignRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectsAlignRight: React.FC<LanObjectsAlignRightProps>;
export default LanObjectsAlignRight;

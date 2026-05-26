import React from 'react';

export interface LanObjectsAlignCenterVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectsAlignCenterVertical: React.FC<LanObjectsAlignCenterVerticalProps>;
export default LanObjectsAlignCenterVertical;

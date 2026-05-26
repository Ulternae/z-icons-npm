import React from 'react';

export interface LanCropSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCropSolid: React.FC<LanCropSolidProps>;
export default LanCropSolid;

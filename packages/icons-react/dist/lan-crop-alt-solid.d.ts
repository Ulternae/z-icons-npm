import React from 'react';

export interface LanCropAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCropAltSolid: React.FC<LanCropAltSolidProps>;
export default LanCropAltSolid;

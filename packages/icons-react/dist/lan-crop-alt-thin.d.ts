import React from 'react';

export interface LanCropAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCropAltThin: React.FC<LanCropAltThinProps>;
export default LanCropAltThin;

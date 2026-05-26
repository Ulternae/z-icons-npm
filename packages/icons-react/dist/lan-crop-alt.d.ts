import React from 'react';

export interface LanCropAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCropAlt: React.FC<LanCropAltProps>;
export default LanCropAlt;

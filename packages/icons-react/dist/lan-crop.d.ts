import React from 'react';

export interface LanCropProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrop: React.FC<LanCropProps>;
export default LanCrop;

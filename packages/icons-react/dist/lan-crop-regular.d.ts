import React from 'react';

export interface LanCropRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCropRegular: React.FC<LanCropRegularProps>;
export default LanCropRegular;

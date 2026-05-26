import React from 'react';

export interface LanCropAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCropAltRegular: React.FC<LanCropAltRegularProps>;
export default LanCropAltRegular;

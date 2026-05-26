import React from 'react';

export interface LanCroissantRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCroissantRegular: React.FC<LanCroissantRegularProps>;
export default LanCroissantRegular;

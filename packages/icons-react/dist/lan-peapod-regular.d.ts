import React from 'react';

export interface LanPeapodRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeapodRegular: React.FC<LanPeapodRegularProps>;
export default LanPeapodRegular;

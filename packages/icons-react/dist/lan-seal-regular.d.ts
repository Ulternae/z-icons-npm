import React from 'react';

export interface LanSealRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSealRegular: React.FC<LanSealRegularProps>;
export default LanSealRegular;

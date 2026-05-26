import React from 'react';

export interface LanIdCardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIdCardRegular: React.FC<LanIdCardRegularProps>;
export default LanIdCardRegular;

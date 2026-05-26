import React from 'react';

export interface LanIdCardAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIdCardAltRegular: React.FC<LanIdCardAltRegularProps>;
export default LanIdCardAltRegular;

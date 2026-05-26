import React from 'react';

export interface LanShieldBlankRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldBlankRegular: React.FC<LanShieldBlankRegularProps>;
export default LanShieldBlankRegular;

import React from 'react';

export interface LanPhoneSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneSquareRegular: React.FC<LanPhoneSquareRegularProps>;
export default LanPhoneSquareRegular;

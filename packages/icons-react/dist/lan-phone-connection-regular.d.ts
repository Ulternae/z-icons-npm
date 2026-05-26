import React from 'react';

export interface LanPhoneConnectionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneConnectionRegular: React.FC<LanPhoneConnectionRegularProps>;
export default LanPhoneConnectionRegular;

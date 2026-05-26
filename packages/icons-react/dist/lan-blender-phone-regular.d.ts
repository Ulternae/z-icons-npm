import React from 'react';

export interface LanBlenderPhoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlenderPhoneRegular: React.FC<LanBlenderPhoneRegularProps>;
export default LanBlenderPhoneRegular;

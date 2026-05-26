import React from 'react';

export interface LanSoapRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSoapRegular: React.FC<LanSoapRegularProps>;
export default LanSoapRegular;

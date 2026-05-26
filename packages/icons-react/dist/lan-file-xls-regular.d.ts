import React from 'react';

export interface LanFileXlsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileXlsRegular: React.FC<LanFileXlsRegularProps>;
export default LanFileXlsRegular;

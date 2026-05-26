import React from 'react';

export interface LanOarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOarsRegular: React.FC<LanOarsRegularProps>;
export default LanOarsRegular;

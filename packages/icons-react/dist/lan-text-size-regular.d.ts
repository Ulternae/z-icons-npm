import React from 'react';

export interface LanTextSizeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextSizeRegular: React.FC<LanTextSizeRegularProps>;
export default LanTextSizeRegular;

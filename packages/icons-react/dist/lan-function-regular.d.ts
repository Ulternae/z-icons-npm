import React from 'react';

export interface LanFunctionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFunctionRegular: React.FC<LanFunctionRegularProps>;
export default LanFunctionRegular;

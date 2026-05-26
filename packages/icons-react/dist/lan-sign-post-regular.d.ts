import React from 'react';

export interface LanSignPostRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignPostRegular: React.FC<LanSignPostRegularProps>;
export default LanSignPostRegular;

import React from 'react';

export interface LanScrollRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScrollRegular: React.FC<LanScrollRegularProps>;
export default LanScrollRegular;

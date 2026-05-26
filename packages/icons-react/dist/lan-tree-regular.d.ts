import React from 'react';

export interface LanTreeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeRegular: React.FC<LanTreeRegularProps>;
export default LanTreeRegular;

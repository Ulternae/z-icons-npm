import React from 'react';

export interface LanShelvesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShelvesRegular: React.FC<LanShelvesRegularProps>;
export default LanShelvesRegular;

import React from 'react';

export interface LanShelvesEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShelvesEmptyRegular: React.FC<LanShelvesEmptyRegularProps>;
export default LanShelvesEmptyRegular;

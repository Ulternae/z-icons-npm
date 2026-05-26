import React from 'react';

export interface LanCheckDoubleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckDoubleRegular: React.FC<LanCheckDoubleRegularProps>;
export default LanCheckDoubleRegular;

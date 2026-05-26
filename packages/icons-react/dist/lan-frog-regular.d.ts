import React from 'react';

export interface LanFrogRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFrogRegular: React.FC<LanFrogRegularProps>;
export default LanFrogRegular;

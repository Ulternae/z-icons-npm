import React from 'react';

export interface LanCanoePersonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCanoePersonRegular: React.FC<LanCanoePersonRegularProps>;
export default LanCanoePersonRegular;

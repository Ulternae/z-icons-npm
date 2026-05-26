import React from 'react';

export interface LanWindRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindRegular: React.FC<LanWindRegularProps>;
export default LanWindRegular;

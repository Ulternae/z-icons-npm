import React from 'react';

export interface LanMaleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaleRegular: React.FC<LanMaleRegularProps>;
export default LanMaleRegular;

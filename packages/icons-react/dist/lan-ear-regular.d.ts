import React from 'react';

export interface LanEarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarRegular: React.FC<LanEarRegularProps>;
export default LanEarRegular;

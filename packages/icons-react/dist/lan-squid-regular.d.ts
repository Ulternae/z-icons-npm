import React from 'react';

export interface LanSquidRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquidRegular: React.FC<LanSquidRegularProps>;
export default LanSquidRegular;

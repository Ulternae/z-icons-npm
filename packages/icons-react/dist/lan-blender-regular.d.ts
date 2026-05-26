import React from 'react';

export interface LanBlenderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlenderRegular: React.FC<LanBlenderRegularProps>;
export default LanBlenderRegular;

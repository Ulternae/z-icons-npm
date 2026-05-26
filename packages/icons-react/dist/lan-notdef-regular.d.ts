import React from 'react';

export interface LanNotdefRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotdefRegular: React.FC<LanNotdefRegularProps>;
export default LanNotdefRegular;

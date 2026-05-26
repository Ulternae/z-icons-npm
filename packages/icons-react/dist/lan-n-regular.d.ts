import React from 'react';

export interface LanNRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNRegular: React.FC<LanNRegularProps>;
export default LanNRegular;

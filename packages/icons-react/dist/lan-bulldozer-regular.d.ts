import React from 'react';

export interface LanBulldozerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBulldozerRegular: React.FC<LanBulldozerRegularProps>;
export default LanBulldozerRegular;

import React from 'react';

export interface LanBahaiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBahaiRegular: React.FC<LanBahaiRegularProps>;
export default LanBahaiRegular;

import React from 'react';

export interface LanBoldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoldRegular: React.FC<LanBoldRegularProps>;
export default LanBoldRegular;

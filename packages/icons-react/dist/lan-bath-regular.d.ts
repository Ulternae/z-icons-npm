import React from 'react';

export interface LanBathRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBathRegular: React.FC<LanBathRegularProps>;
export default LanBathRegular;

import React from 'react';

export interface LanBinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinRegular: React.FC<LanBinRegularProps>;
export default LanBinRegular;

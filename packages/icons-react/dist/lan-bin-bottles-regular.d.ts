import React from 'react';

export interface LanBinBottlesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinBottlesRegular: React.FC<LanBinBottlesRegularProps>;
export default LanBinBottlesRegular;

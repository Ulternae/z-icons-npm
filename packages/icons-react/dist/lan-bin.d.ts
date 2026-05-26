import React from 'react';

export interface LanBinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBin: React.FC<LanBinProps>;
export default LanBin;

import React from 'react';

export interface LanTapeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTapeRegular: React.FC<LanTapeRegularProps>;
export default LanTapeRegular;

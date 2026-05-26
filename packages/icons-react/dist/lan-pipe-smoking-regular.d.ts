import React from 'react';

export interface LanPipeSmokingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeSmokingRegular: React.FC<LanPipeSmokingRegularProps>;
export default LanPipeSmokingRegular;

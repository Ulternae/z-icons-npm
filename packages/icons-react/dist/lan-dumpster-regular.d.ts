import React from 'react';

export interface LanDumpsterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDumpsterRegular: React.FC<LanDumpsterRegularProps>;
export default LanDumpsterRegular;

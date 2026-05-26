import React from 'react';

export interface LanCompressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompressRegular: React.FC<LanCompressRegularProps>;
export default LanCompressRegular;

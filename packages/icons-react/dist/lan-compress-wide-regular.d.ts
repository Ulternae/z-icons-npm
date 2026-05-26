import React from 'react';

export interface LanCompressWideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompressWideRegular: React.FC<LanCompressWideRegularProps>;
export default LanCompressWideRegular;

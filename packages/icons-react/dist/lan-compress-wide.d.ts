import React from 'react';

export interface LanCompressWideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompressWide: React.FC<LanCompressWideProps>;
export default LanCompressWide;

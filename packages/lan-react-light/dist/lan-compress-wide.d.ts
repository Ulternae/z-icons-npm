import React from 'react';

export interface LanCompressWideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompressWide(props: LanCompressWideProps): React.ReactElement;
export default LanCompressWide;

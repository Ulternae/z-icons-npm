import React from 'react';

export interface LanCompressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompress(props: LanCompressProps): React.ReactElement;
export default LanCompress;

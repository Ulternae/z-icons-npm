import React from 'react';

export interface LanCompressWideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompressWideThin(props: LanCompressWideThinProps): React.ReactElement;
export default LanCompressWideThin;

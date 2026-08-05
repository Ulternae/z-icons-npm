import React from 'react';

export interface LanCompressWideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompressWideSolid(props: LanCompressWideSolidProps): React.ReactElement;
export default LanCompressWideSolid;

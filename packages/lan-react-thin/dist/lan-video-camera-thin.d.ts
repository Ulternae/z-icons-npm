import React from 'react';

export interface LanVideoCameraThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoCameraThin(props: LanVideoCameraThinProps): React.ReactElement;
export default LanVideoCameraThin;

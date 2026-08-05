import React from 'react';

export interface LanVideoCameraSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoCameraSolid(props: LanVideoCameraSolidProps): React.ReactElement;
export default LanVideoCameraSolid;

import React from 'react';

export interface LanVideoCameraRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoCameraRegular(props: LanVideoCameraRegularProps): React.ReactElement;
export default LanVideoCameraRegular;

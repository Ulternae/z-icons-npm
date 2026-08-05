import React from 'react';

export interface LanVideoCameraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoCamera(props: LanVideoCameraProps): React.ReactElement;
export default LanVideoCamera;

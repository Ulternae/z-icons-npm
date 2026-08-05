import React from 'react';

export interface LanCameraViewfinderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraViewfinderSolid(props: LanCameraViewfinderSolidProps): React.ReactElement;
export default LanCameraViewfinderSolid;

import React from 'react';

export interface LanCameraViewfinderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraViewfinderThin(props: LanCameraViewfinderThinProps): React.ReactElement;
export default LanCameraViewfinderThin;

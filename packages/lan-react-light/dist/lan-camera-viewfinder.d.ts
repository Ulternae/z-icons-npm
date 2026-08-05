import React from 'react';

export interface LanCameraViewfinderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraViewfinder(props: LanCameraViewfinderProps): React.ReactElement;
export default LanCameraViewfinder;

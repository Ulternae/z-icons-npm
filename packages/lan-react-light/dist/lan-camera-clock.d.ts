import React from 'react';

export interface LanCameraClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraClock(props: LanCameraClockProps): React.ReactElement;
export default LanCameraClock;

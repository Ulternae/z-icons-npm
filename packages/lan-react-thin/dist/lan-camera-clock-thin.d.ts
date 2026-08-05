import React from 'react';

export interface LanCameraClockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraClockThin(props: LanCameraClockThinProps): React.ReactElement;
export default LanCameraClockThin;

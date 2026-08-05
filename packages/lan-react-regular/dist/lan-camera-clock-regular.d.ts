import React from 'react';

export interface LanCameraClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraClockRegular(props: LanCameraClockRegularProps): React.ReactElement;
export default LanCameraClockRegular;

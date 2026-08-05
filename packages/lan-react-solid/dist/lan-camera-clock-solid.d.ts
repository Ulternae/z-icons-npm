import React from 'react';

export interface LanCameraClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraClockSolid(props: LanCameraClockSolidProps): React.ReactElement;
export default LanCameraClockSolid;

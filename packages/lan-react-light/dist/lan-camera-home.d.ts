import React from 'react';

export interface LanCameraHomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraHome(props: LanCameraHomeProps): React.ReactElement;
export default LanCameraHome;

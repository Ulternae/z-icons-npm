import React from 'react';

export interface LanCameraCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraCircle(props: LanCameraCircleProps): React.ReactElement;
export default LanCameraCircle;

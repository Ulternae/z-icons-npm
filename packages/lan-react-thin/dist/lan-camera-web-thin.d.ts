import React from 'react';

export interface LanCameraWebThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraWebThin(props: LanCameraWebThinProps): React.ReactElement;
export default LanCameraWebThin;

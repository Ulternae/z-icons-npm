import React from 'react';

export interface LanCameraAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraAltThin(props: LanCameraAltThinProps): React.ReactElement;
export default LanCameraAltThin;

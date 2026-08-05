import React from 'react';

export interface LanCameraRotateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraRotate(props: LanCameraRotateProps): React.ReactElement;
export default LanCameraRotate;

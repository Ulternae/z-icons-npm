import React from 'react';

export interface LanCameraRotateRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraRotateRegular(props: LanCameraRotateRegularProps): React.ReactElement;
export default LanCameraRotateRegular;

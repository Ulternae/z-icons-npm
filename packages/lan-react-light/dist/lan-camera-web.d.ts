import React from 'react';

export interface LanCameraWebProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraWeb(props: LanCameraWebProps): React.ReactElement;
export default LanCameraWeb;

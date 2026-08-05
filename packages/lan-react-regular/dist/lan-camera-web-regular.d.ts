import React from 'react';

export interface LanCameraWebRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraWebRegular(props: LanCameraWebRegularProps): React.ReactElement;
export default LanCameraWebRegular;

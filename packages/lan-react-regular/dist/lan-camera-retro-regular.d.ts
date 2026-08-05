import React from 'react';

export interface LanCameraRetroRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraRetroRegular(props: LanCameraRetroRegularProps): React.ReactElement;
export default LanCameraRetroRegular;

import React from 'react';

export interface LanCameraCctvRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraCctvRegular(props: LanCameraCctvRegularProps): React.ReactElement;
export default LanCameraCctvRegular;

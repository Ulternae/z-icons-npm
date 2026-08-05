import React from 'react';

export interface LanCameraRetroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraRetro(props: LanCameraRetroProps): React.ReactElement;
export default LanCameraRetro;

import React from 'react';

export interface LanCameraAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraAltRegular(props: LanCameraAltRegularProps): React.ReactElement;
export default LanCameraAltRegular;

import React from 'react';

export interface LanCameraHomeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraHomeRegular(props: LanCameraHomeRegularProps): React.ReactElement;
export default LanCameraHomeRegular;

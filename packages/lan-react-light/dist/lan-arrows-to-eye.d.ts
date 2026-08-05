import React from 'react';

export interface LanArrowsToEyeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsToEye(props: LanArrowsToEyeProps): React.ReactElement;
export default LanArrowsToEye;

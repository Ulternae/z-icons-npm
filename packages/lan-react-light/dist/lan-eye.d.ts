import React from 'react';

export interface LanEyeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEye(props: LanEyeProps): React.ReactElement;
export default LanEye;

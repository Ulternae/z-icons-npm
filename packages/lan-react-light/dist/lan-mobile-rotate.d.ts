import React from 'react';

export interface LanMobileRotateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileRotate(props: LanMobileRotateProps): React.ReactElement;
export default LanMobileRotate;

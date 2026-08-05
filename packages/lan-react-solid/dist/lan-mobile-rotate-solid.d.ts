import React from 'react';

export interface LanMobileRotateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileRotateSolid(props: LanMobileRotateSolidProps): React.ReactElement;
export default LanMobileRotateSolid;

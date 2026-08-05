import React from 'react';

export interface LanPeopleDressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleDressSolid(props: LanPeopleDressSolidProps): React.ReactElement;
export default LanPeopleDressSolid;

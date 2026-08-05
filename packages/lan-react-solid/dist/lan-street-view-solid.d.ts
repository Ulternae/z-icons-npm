import React from 'react';

export interface LanStreetViewSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStreetViewSolid(props: LanStreetViewSolidProps): React.ReactElement;
export default LanStreetViewSolid;

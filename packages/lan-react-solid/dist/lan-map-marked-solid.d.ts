import React from 'react';

export interface LanMapMarkedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkedSolid(props: LanMapMarkedSolidProps): React.ReactElement;
export default LanMapMarkedSolid;

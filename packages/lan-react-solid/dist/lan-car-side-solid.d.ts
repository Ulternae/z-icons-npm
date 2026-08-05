import React from 'react';

export interface LanCarSideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarSideSolid(props: LanCarSideSolidProps): React.ReactElement;
export default LanCarSideSolid;

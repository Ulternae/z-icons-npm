import React from 'react';

export interface LanBusSideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusSideSolid(props: LanBusSideSolidProps): React.ReactElement;
export default LanBusSideSolid;

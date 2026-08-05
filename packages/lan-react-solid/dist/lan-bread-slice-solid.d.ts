import React from 'react';

export interface LanBreadSliceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBreadSliceSolid(props: LanBreadSliceSolidProps): React.ReactElement;
export default LanBreadSliceSolid;

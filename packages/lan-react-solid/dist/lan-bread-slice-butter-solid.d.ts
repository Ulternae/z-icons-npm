import React from 'react';

export interface LanBreadSliceButterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBreadSliceButterSolid(props: LanBreadSliceButterSolidProps): React.ReactElement;
export default LanBreadSliceButterSolid;

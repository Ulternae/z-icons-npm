import React from 'react';

export interface LanBreadSliceButterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBreadSliceButter(props: LanBreadSliceButterProps): React.ReactElement;
export default LanBreadSliceButter;

import React from 'react';

export interface LanBreadSliceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBreadSlice(props: LanBreadSliceProps): React.ReactElement;
export default LanBreadSlice;

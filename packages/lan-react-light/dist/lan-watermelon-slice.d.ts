import React from 'react';

export interface LanWatermelonSliceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatermelonSlice(props: LanWatermelonSliceProps): React.ReactElement;
export default LanWatermelonSlice;

import React from 'react';

export interface LanMelonSliceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMelonSlice(props: LanMelonSliceProps): React.ReactElement;
export default LanMelonSlice;

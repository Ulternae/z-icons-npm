import React from 'react';

export interface LanCakeSliceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCakeSlice(props: LanCakeSliceProps): React.ReactElement;
export default LanCakeSlice;

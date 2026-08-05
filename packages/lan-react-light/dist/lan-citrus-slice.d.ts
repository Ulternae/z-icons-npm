import React from 'react';

export interface LanCitrusSliceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCitrusSlice(props: LanCitrusSliceProps): React.ReactElement;
export default LanCitrusSlice;

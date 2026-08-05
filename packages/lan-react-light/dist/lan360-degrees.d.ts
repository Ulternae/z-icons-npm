import React from 'react';

export interface Lan360DegreesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function Lan360Degrees(props: Lan360DegreesProps): React.ReactElement;
export default Lan360Degrees;

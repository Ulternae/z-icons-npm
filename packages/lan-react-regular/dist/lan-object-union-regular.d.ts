import React from 'react';

export interface LanObjectUnionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectUnionRegular(props: LanObjectUnionRegularProps): React.ReactElement;
export default LanObjectUnionRegular;

import React from 'react';

export interface LanObjectUnionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectUnion(props: LanObjectUnionProps): React.ReactElement;
export default LanObjectUnion;

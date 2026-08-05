import React from 'react';

export interface LanObjectUnionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectUnionThin(props: LanObjectUnionThinProps): React.ReactElement;
export default LanObjectUnionThin;

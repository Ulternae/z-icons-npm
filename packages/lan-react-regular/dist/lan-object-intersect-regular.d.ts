import React from 'react';

export interface LanObjectIntersectRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectIntersectRegular(props: LanObjectIntersectRegularProps): React.ReactElement;
export default LanObjectIntersectRegular;

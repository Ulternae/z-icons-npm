import React from 'react';

export interface LanObjectIntersectThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectIntersectThin(props: LanObjectIntersectThinProps): React.ReactElement;
export default LanObjectIntersectThin;

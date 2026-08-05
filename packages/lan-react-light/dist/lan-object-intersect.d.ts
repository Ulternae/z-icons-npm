import React from 'react';

export interface LanObjectIntersectProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectIntersect(props: LanObjectIntersectProps): React.ReactElement;
export default LanObjectIntersect;

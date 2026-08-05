import React from 'react';

export interface LanIntersectionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIntersectionThin(props: LanIntersectionThinProps): React.ReactElement;
export default LanIntersectionThin;

import React from 'react';

export interface LanGlassHalfFullThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassHalfFullThin(props: LanGlassHalfFullThinProps): React.ReactElement;
export default LanGlassHalfFullThin;

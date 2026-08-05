import React from 'react';

export interface LanGlassHalfFullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassHalfFull(props: LanGlassHalfFullProps): React.ReactElement;
export default LanGlassHalfFull;

import React from 'react';

export interface LanGlassesAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassesAlt(props: LanGlassesAltProps): React.ReactElement;
export default LanGlassesAlt;

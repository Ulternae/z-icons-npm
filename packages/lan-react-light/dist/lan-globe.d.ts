import React from 'react';

export interface LanGlobeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobe(props: LanGlobeProps): React.ReactElement;
export default LanGlobe;

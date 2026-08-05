import React from 'react';

export interface LanGalaxyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGalaxy(props: LanGalaxyProps): React.ReactElement;
export default LanGalaxy;

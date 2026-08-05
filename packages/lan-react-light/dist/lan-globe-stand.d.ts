import React from 'react';

export interface LanGlobeStandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeStand(props: LanGlobeStandProps): React.ReactElement;
export default LanGlobeStand;

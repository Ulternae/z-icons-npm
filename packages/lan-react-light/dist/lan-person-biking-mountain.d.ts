import React from 'react';

export interface LanPersonBikingMountainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonBikingMountain(props: LanPersonBikingMountainProps): React.ReactElement;
export default LanPersonBikingMountain;

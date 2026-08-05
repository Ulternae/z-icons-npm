import React from 'react';

export interface LanPersonBikingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonBiking(props: LanPersonBikingProps): React.ReactElement;
export default LanPersonBiking;

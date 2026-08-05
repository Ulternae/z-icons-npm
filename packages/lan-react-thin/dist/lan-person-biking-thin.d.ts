import React from 'react';

export interface LanPersonBikingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonBikingThin(props: LanPersonBikingThinProps): React.ReactElement;
export default LanPersonBikingThin;

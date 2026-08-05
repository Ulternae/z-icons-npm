import React from 'react';

export interface LanPersonHikingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonHikingThin(props: LanPersonHikingThinProps): React.ReactElement;
export default LanPersonHikingThin;

import React from 'react';

export interface LanPersonSwimmingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSwimmingThin(props: LanPersonSwimmingThinProps): React.ReactElement;
export default LanPersonSwimmingThin;

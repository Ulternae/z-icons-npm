import React from 'react';

export interface LanPersonSwimmingPoolRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSwimmingPoolRegular(props: LanPersonSwimmingPoolRegularProps): React.ReactElement;
export default LanPersonSwimmingPoolRegular;

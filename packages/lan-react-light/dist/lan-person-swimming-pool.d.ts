import React from 'react';

export interface LanPersonSwimmingPoolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSwimmingPool(props: LanPersonSwimmingPoolProps): React.ReactElement;
export default LanPersonSwimmingPool;

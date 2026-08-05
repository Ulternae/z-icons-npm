import React from 'react';

export interface LanPersonSwimmingPoolSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSwimmingPoolSolid(props: LanPersonSwimmingPoolSolidProps): React.ReactElement;
export default LanPersonSwimmingPoolSolid;

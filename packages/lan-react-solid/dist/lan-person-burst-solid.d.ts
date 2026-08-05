import React from 'react';

export interface LanPersonBurstSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonBurstSolid(props: LanPersonBurstSolidProps): React.ReactElement;
export default LanPersonBurstSolid;

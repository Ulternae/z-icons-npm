import React from 'react';

export interface LanHotTubPersonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHotTubPersonSolid(props: LanHotTubPersonSolidProps): React.ReactElement;
export default LanHotTubPersonSolid;

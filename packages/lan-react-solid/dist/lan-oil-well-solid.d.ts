import React from 'react';

export interface LanOilWellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOilWellSolid(props: LanOilWellSolidProps): React.ReactElement;
export default LanOilWellSolid;

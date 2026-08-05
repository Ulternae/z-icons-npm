import React from 'react';

export interface LanOilCanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOilCanSolid(props: LanOilCanSolidProps): React.ReactElement;
export default LanOilCanSolid;

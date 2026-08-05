import React from 'react';

export interface LanOilCanDripSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOilCanDripSolid(props: LanOilCanDripSolidProps): React.ReactElement;
export default LanOilCanDripSolid;

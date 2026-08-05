import React from 'react';

export interface LanOilWellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOilWell(props: LanOilWellProps): React.ReactElement;
export default LanOilWell;

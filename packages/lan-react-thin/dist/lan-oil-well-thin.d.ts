import React from 'react';

export interface LanOilWellThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOilWellThin(props: LanOilWellThinProps): React.ReactElement;
export default LanOilWellThin;

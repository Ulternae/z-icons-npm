import React from 'react';

export interface LanOilCanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOilCan(props: LanOilCanProps): React.ReactElement;
export default LanOilCan;

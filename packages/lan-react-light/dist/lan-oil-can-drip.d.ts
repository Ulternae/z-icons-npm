import React from 'react';

export interface LanOilCanDripProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOilCanDrip(props: LanOilCanDripProps): React.ReactElement;
export default LanOilCanDrip;

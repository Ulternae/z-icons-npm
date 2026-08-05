import React from 'react';

export interface LanCartCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartCirclePlus(props: LanCartCirclePlusProps): React.ReactElement;
export default LanCartCirclePlus;

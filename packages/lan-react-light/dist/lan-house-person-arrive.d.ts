import React from 'react';

export interface LanHousePersonArriveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHousePersonArrive(props: LanHousePersonArriveProps): React.ReactElement;
export default LanHousePersonArrive;

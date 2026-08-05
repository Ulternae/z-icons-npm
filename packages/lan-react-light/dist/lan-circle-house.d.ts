import React from 'react';

export interface LanCircleHouseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHouse(props: LanCircleHouseProps): React.ReactElement;
export default LanCircleHouse;

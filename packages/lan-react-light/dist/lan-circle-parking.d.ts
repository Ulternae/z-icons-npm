import React from 'react';

export interface LanCircleParkingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleParking(props: LanCircleParkingProps): React.ReactElement;
export default LanCircleParking;

import React from 'react';

export interface LanSquareParkingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareParking(props: LanSquareParkingProps): React.ReactElement;
export default LanSquareParking;

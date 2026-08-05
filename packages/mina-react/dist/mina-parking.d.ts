import React from 'react';

export interface MinaParkingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaParking(props: MinaParkingProps): React.ReactElement;
export default MinaParking;

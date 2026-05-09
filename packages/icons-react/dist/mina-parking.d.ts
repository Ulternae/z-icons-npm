import React from 'react';

export interface MinaParkingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaParking: React.FC<MinaParkingProps>;
export default MinaParking;

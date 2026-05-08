import React from 'react';

export interface MinaBoatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBoat: React.FC<MinaBoatProps>;
export default MinaBoat;

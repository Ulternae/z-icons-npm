import React from 'react';

export interface CoreHouseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreHouse: React.FC<CoreHouseProps>;
export default CoreHouse;

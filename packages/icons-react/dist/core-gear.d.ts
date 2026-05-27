import React from 'react';

export interface CoreGearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGear: React.FC<CoreGearProps>;
export default CoreGear;

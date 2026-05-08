import React from 'react';

export interface MinaBabyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBaby: React.FC<MinaBabyProps>;
export default MinaBaby;

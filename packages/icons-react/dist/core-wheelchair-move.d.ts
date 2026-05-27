import React from 'react';

export interface CoreWheelchairMoveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWheelchairMove: React.FC<CoreWheelchairMoveProps>;
export default CoreWheelchairMove;

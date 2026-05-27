import React from 'react';

export interface NeoWheelchairMoveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoWheelchairMove: React.FC<NeoWheelchairMoveProps>;
export default NeoWheelchairMove;

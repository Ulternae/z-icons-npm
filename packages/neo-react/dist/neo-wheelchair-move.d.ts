import React from 'react';

export interface NeoWheelchairMoveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoWheelchairMove(props: NeoWheelchairMoveProps): React.ReactElement;
export default NeoWheelchairMove;

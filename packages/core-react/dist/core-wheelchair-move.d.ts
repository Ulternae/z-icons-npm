import React from 'react';

export interface CoreWheelchairMoveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWheelchairMove(props: CoreWheelchairMoveProps): React.ReactElement;
export default CoreWheelchairMove;

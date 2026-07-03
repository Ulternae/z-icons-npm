import React from 'react';

export interface BruBoardGameGeekProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBoardGameGeek(props: BruBoardGameGeekProps): React.ReactElement;
export default BruBoardGameGeek;

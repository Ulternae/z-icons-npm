import React from 'react';

export interface BruBoardGameGeekProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBoardGameGeek: React.FC<BruBoardGameGeekProps>;
export default BruBoardGameGeek;

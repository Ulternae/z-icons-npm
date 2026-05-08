import React from 'react';

export interface MinaMoveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMove: React.FC<MinaMoveProps>;
export default MinaMove;

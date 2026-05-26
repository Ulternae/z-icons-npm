import React from 'react';

export interface LanListSquaresThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListSquaresThin: React.FC<LanListSquaresThinProps>;
export default LanListSquaresThin;

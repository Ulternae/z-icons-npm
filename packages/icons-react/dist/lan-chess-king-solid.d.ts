import React from 'react';

export interface LanChessKingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessKingSolid: React.FC<LanChessKingSolidProps>;
export default LanChessKingSolid;

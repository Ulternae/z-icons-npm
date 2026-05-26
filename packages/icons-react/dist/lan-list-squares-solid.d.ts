import React from 'react';

export interface LanListSquaresSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListSquaresSolid: React.FC<LanListSquaresSolidProps>;
export default LanListSquaresSolid;

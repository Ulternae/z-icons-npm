import React from 'react';

export interface MinaTableSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTableSolid: React.FC<MinaTableSolidProps>;
export default MinaTableSolid;

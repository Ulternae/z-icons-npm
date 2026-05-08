import React from 'react';

export interface MinaTableProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTable: React.FC<MinaTableProps>;
export default MinaTable;

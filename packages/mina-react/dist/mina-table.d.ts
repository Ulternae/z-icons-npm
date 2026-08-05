import React from 'react';

export interface MinaTableProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTable(props: MinaTableProps): React.ReactElement;
export default MinaTable;

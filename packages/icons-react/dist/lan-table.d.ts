import React from 'react';

export interface LanTableProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTable: React.FC<LanTableProps>;
export default LanTable;

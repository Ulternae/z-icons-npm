import React from 'react';

export interface LanFanTableProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFanTable: React.FC<LanFanTableProps>;
export default LanFanTable;

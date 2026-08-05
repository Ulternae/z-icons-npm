import React from 'react';

export interface LanFanTableProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFanTable(props: LanFanTableProps): React.ReactElement;
export default LanFanTable;

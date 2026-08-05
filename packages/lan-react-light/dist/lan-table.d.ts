import React from 'react';

export interface LanTableProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTable(props: LanTableProps): React.ReactElement;
export default LanTable;

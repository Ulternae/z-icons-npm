import React from 'react';

export interface LanTableRowsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableRows(props: LanTableRowsProps): React.ReactElement;
export default LanTableRows;

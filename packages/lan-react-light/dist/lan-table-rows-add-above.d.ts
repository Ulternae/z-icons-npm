import React from 'react';

export interface LanTableRowsAddAboveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableRowsAddAbove(props: LanTableRowsAddAboveProps): React.ReactElement;
export default LanTableRowsAddAbove;

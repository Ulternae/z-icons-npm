import React from 'react';

export interface LanTableRowsRemoveAboveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableRowsRemoveAbove(props: LanTableRowsRemoveAboveProps): React.ReactElement;
export default LanTableRowsRemoveAbove;

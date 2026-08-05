import React from 'react';

export interface LanTableRowsRemoveBelowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableRowsRemoveBelow(props: LanTableRowsRemoveBelowProps): React.ReactElement;
export default LanTableRowsRemoveBelow;

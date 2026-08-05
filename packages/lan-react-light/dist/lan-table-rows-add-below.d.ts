import React from 'react';

export interface LanTableRowsAddBelowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableRowsAddBelow(props: LanTableRowsAddBelowProps): React.ReactElement;
export default LanTableRowsAddBelow;

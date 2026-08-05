import React from 'react';

export interface LanTableCellsSplitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsSplit(props: LanTableCellsSplitProps): React.ReactElement;
export default LanTableCellsSplit;

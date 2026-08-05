import React from 'react';

export interface LanTableCellsLargeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsLarge(props: LanTableCellsLargeProps): React.ReactElement;
export default LanTableCellsLarge;

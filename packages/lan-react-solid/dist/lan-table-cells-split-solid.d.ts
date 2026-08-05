import React from 'react';

export interface LanTableCellsSplitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsSplitSolid(props: LanTableCellsSplitSolidProps): React.ReactElement;
export default LanTableCellsSplitSolid;

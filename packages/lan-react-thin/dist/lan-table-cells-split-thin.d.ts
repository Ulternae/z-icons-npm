import React from 'react';

export interface LanTableCellsSplitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsSplitThin(props: LanTableCellsSplitThinProps): React.ReactElement;
export default LanTableCellsSplitThin;

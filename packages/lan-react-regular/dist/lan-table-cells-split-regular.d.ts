import React from 'react';

export interface LanTableCellsSplitRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsSplitRegular(props: LanTableCellsSplitRegularProps): React.ReactElement;
export default LanTableCellsSplitRegular;

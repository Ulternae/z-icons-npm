import React from 'react';

export interface LanTableCellsColumnsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsColumnsRegular(props: LanTableCellsColumnsRegularProps): React.ReactElement;
export default LanTableCellsColumnsRegular;

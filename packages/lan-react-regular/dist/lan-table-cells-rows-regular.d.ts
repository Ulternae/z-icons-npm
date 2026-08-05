import React from 'react';

export interface LanTableCellsRowsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsRowsRegular(props: LanTableCellsRowsRegularProps): React.ReactElement;
export default LanTableCellsRowsRegular;

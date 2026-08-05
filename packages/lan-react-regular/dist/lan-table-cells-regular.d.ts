import React from 'react';

export interface LanTableCellsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsRegular(props: LanTableCellsRegularProps): React.ReactElement;
export default LanTableCellsRegular;

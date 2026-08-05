import React from 'react';

export interface LanTableCellsHeaderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsHeaderRegular(props: LanTableCellsHeaderRegularProps): React.ReactElement;
export default LanTableCellsHeaderRegular;

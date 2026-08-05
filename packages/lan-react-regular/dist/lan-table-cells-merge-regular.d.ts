import React from 'react';

export interface LanTableCellsMergeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsMergeRegular(props: LanTableCellsMergeRegularProps): React.ReactElement;
export default LanTableCellsMergeRegular;

import React from 'react';

export interface LanTableCellsMergeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsMerge(props: LanTableCellsMergeProps): React.ReactElement;
export default LanTableCellsMerge;

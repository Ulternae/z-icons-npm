import React from 'react';

export interface LanTableCellsColumnsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsColumnsThin(props: LanTableCellsColumnsThinProps): React.ReactElement;
export default LanTableCellsColumnsThin;

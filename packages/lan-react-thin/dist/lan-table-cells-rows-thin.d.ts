import React from 'react';

export interface LanTableCellsRowsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsRowsThin(props: LanTableCellsRowsThinProps): React.ReactElement;
export default LanTableCellsRowsThin;

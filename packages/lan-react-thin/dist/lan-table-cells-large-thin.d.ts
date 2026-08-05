import React from 'react';

export interface LanTableCellsLargeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsLargeThin(props: LanTableCellsLargeThinProps): React.ReactElement;
export default LanTableCellsLargeThin;

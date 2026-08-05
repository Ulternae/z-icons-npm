import React from 'react';

export interface LanTableCellsRowsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsRowsSolid(props: LanTableCellsRowsSolidProps): React.ReactElement;
export default LanTableCellsRowsSolid;

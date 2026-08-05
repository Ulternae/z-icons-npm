import React from 'react';

export interface LanTableCellsColumnsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsColumnsSolid(props: LanTableCellsColumnsSolidProps): React.ReactElement;
export default LanTableCellsColumnsSolid;

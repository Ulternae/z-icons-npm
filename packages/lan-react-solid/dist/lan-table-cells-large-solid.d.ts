import React from 'react';

export interface LanTableCellsLargeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsLargeSolid(props: LanTableCellsLargeSolidProps): React.ReactElement;
export default LanTableCellsLargeSolid;

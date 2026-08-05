import React from 'react';

export interface LanTableCellsHeaderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsHeaderSolid(props: LanTableCellsHeaderSolidProps): React.ReactElement;
export default LanTableCellsHeaderSolid;

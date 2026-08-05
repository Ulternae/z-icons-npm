import React from 'react';

export interface LanTableCellsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsSolid(props: LanTableCellsSolidProps): React.ReactElement;
export default LanTableCellsSolid;

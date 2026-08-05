import React from 'react';

export interface LanTableCellsMergeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableCellsMergeSolid(props: LanTableCellsMergeSolidProps): React.ReactElement;
export default LanTableCellsMergeSolid;

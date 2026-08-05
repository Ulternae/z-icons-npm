import React from 'react';

export interface LanDiagramCellsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramCellsSolid(props: LanDiagramCellsSolidProps): React.ReactElement;
export default LanDiagramCellsSolid;

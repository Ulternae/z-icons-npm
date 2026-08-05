import React from 'react';

export interface LanDiagramCellsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramCells(props: LanDiagramCellsProps): React.ReactElement;
export default LanDiagramCells;

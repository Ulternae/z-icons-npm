import React from 'react';

export interface LanDiagramCellsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramCells: React.FC<LanDiagramCellsProps>;
export default LanDiagramCells;

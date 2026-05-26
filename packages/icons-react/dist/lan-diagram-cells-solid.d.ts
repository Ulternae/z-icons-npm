import React from 'react';

export interface LanDiagramCellsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramCellsSolid: React.FC<LanDiagramCellsSolidProps>;
export default LanDiagramCellsSolid;

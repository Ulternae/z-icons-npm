import React from 'react';

export interface LanDiagramCellsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramCellsRegular: React.FC<LanDiagramCellsRegularProps>;
export default LanDiagramCellsRegular;

import React from 'react';

export interface LanDiagramCellsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramCellsThin: React.FC<LanDiagramCellsThinProps>;
export default LanDiagramCellsThin;

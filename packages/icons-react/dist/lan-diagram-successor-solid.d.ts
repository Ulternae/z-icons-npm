import React from 'react';

export interface LanDiagramSuccessorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramSuccessorSolid: React.FC<LanDiagramSuccessorSolidProps>;
export default LanDiagramSuccessorSolid;

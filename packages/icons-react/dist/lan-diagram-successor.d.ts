import React from 'react';

export interface LanDiagramSuccessorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramSuccessor: React.FC<LanDiagramSuccessorProps>;
export default LanDiagramSuccessor;

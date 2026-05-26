import React from 'react';

export interface LanDiagramSuccessorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramSuccessorThin: React.FC<LanDiagramSuccessorThinProps>;
export default LanDiagramSuccessorThin;

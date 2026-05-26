import React from 'react';

export interface LanDiagramSubtaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramSubtaskSolid: React.FC<LanDiagramSubtaskSolidProps>;
export default LanDiagramSubtaskSolid;

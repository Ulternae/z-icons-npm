import React from 'react';

export interface LanDiagramProjectSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramProjectSolid: React.FC<LanDiagramProjectSolidProps>;
export default LanDiagramProjectSolid;

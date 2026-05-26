import React from 'react';

export interface LanDiagramProjectProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramProject: React.FC<LanDiagramProjectProps>;
export default LanDiagramProject;

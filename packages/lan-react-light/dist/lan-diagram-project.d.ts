import React from 'react';

export interface LanDiagramProjectProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramProject(props: LanDiagramProjectProps): React.ReactElement;
export default LanDiagramProject;

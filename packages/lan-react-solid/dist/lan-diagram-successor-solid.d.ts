import React from 'react';

export interface LanDiagramSuccessorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramSuccessorSolid(props: LanDiagramSuccessorSolidProps): React.ReactElement;
export default LanDiagramSuccessorSolid;

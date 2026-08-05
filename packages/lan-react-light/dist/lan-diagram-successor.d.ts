import React from 'react';

export interface LanDiagramSuccessorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramSuccessor(props: LanDiagramSuccessorProps): React.ReactElement;
export default LanDiagramSuccessor;

import React from 'react';

export interface LanDiagramSuccessorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramSuccessorThin(props: LanDiagramSuccessorThinProps): React.ReactElement;
export default LanDiagramSuccessorThin;

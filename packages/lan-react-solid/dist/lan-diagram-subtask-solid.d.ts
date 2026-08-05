import React from 'react';

export interface LanDiagramSubtaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramSubtaskSolid(props: LanDiagramSubtaskSolidProps): React.ReactElement;
export default LanDiagramSubtaskSolid;

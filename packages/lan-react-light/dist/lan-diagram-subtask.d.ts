import React from 'react';

export interface LanDiagramSubtaskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramSubtask(props: LanDiagramSubtaskProps): React.ReactElement;
export default LanDiagramSubtask;

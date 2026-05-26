import React from 'react';

export interface LanDiagramSubtaskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramSubtask: React.FC<LanDiagramSubtaskProps>;
export default LanDiagramSubtask;

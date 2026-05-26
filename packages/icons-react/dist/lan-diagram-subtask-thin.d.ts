import React from 'react';

export interface LanDiagramSubtaskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramSubtaskThin: React.FC<LanDiagramSubtaskThinProps>;
export default LanDiagramSubtaskThin;

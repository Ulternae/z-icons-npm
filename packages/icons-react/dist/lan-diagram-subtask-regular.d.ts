import React from 'react';

export interface LanDiagramSubtaskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramSubtaskRegular: React.FC<LanDiagramSubtaskRegularProps>;
export default LanDiagramSubtaskRegular;

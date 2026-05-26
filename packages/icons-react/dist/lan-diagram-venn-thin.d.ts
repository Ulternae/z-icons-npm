import React from 'react';

export interface LanDiagramVennThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramVennThin: React.FC<LanDiagramVennThinProps>;
export default LanDiagramVennThin;

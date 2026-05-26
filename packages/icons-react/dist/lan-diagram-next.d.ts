import React from 'react';

export interface LanDiagramNextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramNext: React.FC<LanDiagramNextProps>;
export default LanDiagramNext;

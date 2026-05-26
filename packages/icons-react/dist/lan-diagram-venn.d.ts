import React from 'react';

export interface LanDiagramVennProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramVenn: React.FC<LanDiagramVennProps>;
export default LanDiagramVenn;

import React from 'react';

export interface LanDiagramVennRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramVennRegular: React.FC<LanDiagramVennRegularProps>;
export default LanDiagramVennRegular;

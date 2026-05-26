import React from 'react';

export interface LanDiagramSuccessorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiagramSuccessorRegular: React.FC<LanDiagramSuccessorRegularProps>;
export default LanDiagramSuccessorRegular;

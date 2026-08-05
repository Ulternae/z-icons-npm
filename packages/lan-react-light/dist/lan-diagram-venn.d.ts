import React from 'react';

export interface LanDiagramVennProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramVenn(props: LanDiagramVennProps): React.ReactElement;
export default LanDiagramVenn;

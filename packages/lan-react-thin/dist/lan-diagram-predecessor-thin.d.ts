import React from 'react';

export interface LanDiagramPredecessorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramPredecessorThin(props: LanDiagramPredecessorThinProps): React.ReactElement;
export default LanDiagramPredecessorThin;

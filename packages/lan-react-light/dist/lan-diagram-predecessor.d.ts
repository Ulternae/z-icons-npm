import React from 'react';

export interface LanDiagramPredecessorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramPredecessor(props: LanDiagramPredecessorProps): React.ReactElement;
export default LanDiagramPredecessor;

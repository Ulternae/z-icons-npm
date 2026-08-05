import React from 'react';

export interface LanDiagramPredecessorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramPredecessorSolid(props: LanDiagramPredecessorSolidProps): React.ReactElement;
export default LanDiagramPredecessorSolid;

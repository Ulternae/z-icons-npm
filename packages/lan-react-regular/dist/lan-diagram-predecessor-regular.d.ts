import React from 'react';

export interface LanDiagramPredecessorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramPredecessorRegular(props: LanDiagramPredecessorRegularProps): React.ReactElement;
export default LanDiagramPredecessorRegular;

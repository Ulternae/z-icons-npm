import React from 'react';

export interface LanDiagramPreviousThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramPreviousThin(props: LanDiagramPreviousThinProps): React.ReactElement;
export default LanDiagramPreviousThin;

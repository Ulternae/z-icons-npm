import React from 'react';

export interface LanDiagramPreviousProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramPrevious(props: LanDiagramPreviousProps): React.ReactElement;
export default LanDiagramPrevious;

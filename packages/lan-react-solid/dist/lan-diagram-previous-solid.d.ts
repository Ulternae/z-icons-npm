import React from 'react';

export interface LanDiagramPreviousSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramPreviousSolid(props: LanDiagramPreviousSolidProps): React.ReactElement;
export default LanDiagramPreviousSolid;

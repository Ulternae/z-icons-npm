import React from 'react';

export interface LanDiagramPreviousRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramPreviousRegular(props: LanDiagramPreviousRegularProps): React.ReactElement;
export default LanDiagramPreviousRegular;

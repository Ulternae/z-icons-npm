import React from 'react';

export interface LanDiagramNextRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramNextRegular(props: LanDiagramNextRegularProps): React.ReactElement;
export default LanDiagramNextRegular;

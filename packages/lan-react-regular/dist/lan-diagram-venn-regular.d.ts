import React from 'react';

export interface LanDiagramVennRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramVennRegular(props: LanDiagramVennRegularProps): React.ReactElement;
export default LanDiagramVennRegular;

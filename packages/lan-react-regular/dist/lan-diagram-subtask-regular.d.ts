import React from 'react';

export interface LanDiagramSubtaskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramSubtaskRegular(props: LanDiagramSubtaskRegularProps): React.ReactElement;
export default LanDiagramSubtaskRegular;

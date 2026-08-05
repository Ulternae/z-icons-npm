import React from 'react';

export interface LanDiagramSubtaskThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramSubtaskThin(props: LanDiagramSubtaskThinProps): React.ReactElement;
export default LanDiagramSubtaskThin;

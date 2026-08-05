import React from 'react';

export interface LanDiagramNextThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramNextThin(props: LanDiagramNextThinProps): React.ReactElement;
export default LanDiagramNextThin;

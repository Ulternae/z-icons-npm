import React from 'react';

export interface LanDiagramProjectThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramProjectThin(props: LanDiagramProjectThinProps): React.ReactElement;
export default LanDiagramProjectThin;

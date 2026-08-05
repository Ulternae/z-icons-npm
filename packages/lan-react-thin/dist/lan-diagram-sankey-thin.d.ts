import React from 'react';

export interface LanDiagramSankeyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramSankeyThin(props: LanDiagramSankeyThinProps): React.ReactElement;
export default LanDiagramSankeyThin;

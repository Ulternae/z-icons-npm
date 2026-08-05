import React from 'react';

export interface LanDiagramNextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramNext(props: LanDiagramNextProps): React.ReactElement;
export default LanDiagramNext;

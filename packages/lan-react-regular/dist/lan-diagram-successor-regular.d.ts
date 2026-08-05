import React from 'react';

export interface LanDiagramSuccessorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramSuccessorRegular(props: LanDiagramSuccessorRegularProps): React.ReactElement;
export default LanDiagramSuccessorRegular;

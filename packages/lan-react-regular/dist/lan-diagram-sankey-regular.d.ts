import React from 'react';

export interface LanDiagramSankeyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramSankeyRegular(props: LanDiagramSankeyRegularProps): React.ReactElement;
export default LanDiagramSankeyRegular;

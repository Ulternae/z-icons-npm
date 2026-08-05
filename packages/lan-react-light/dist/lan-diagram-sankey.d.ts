import React from 'react';

export interface LanDiagramSankeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramSankey(props: LanDiagramSankeyProps): React.ReactElement;
export default LanDiagramSankey;

import React from 'react';

export interface LanDiagramProjectRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiagramProjectRegular(props: LanDiagramProjectRegularProps): React.ReactElement;
export default LanDiagramProjectRegular;

import React from 'react';

export interface LanLeafProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeaf(props: LanLeafProps): React.ReactElement;
export default LanLeaf;

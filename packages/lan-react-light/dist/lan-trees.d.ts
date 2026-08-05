import React from 'react';

export interface LanTreesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrees(props: LanTreesProps): React.ReactElement;
export default LanTrees;

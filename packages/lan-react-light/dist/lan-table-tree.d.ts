import React from 'react';

export interface LanTableTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableTree(props: LanTableTreeProps): React.ReactElement;
export default LanTableTree;

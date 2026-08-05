import React from 'react';

export interface LanTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTree(props: LanTreeProps): React.ReactElement;
export default LanTree;

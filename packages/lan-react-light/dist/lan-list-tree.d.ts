import React from 'react';

export interface LanListTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListTree(props: LanListTreeProps): React.ReactElement;
export default LanListTree;

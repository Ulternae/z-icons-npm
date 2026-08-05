import React from 'react';

export interface MinaLeavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLeaves(props: MinaLeavesProps): React.ReactElement;
export default MinaLeaves;

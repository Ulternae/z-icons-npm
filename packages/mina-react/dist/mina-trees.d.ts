import React from 'react';

export interface MinaTreesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTrees(props: MinaTreesProps): React.ReactElement;
export default MinaTrees;

import React from 'react';

export interface MinaTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTree: React.FC<MinaTreeProps>;
export default MinaTree;

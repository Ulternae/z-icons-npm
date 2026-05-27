import React from 'react';

export interface NeoTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTree: React.FC<NeoTreeProps>;
export default NeoTree;

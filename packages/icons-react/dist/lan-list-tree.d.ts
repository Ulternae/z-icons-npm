import React from 'react';

export interface LanListTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListTree: React.FC<LanListTreeProps>;
export default LanListTree;

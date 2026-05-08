import React from 'react';

export interface MinaLeafProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLeaf: React.FC<MinaLeafProps>;
export default MinaLeaf;

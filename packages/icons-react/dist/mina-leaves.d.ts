import React from 'react';

export interface MinaLeavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLeaves: React.FC<MinaLeavesProps>;
export default MinaLeaves;

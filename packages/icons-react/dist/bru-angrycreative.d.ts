import React from 'react';

export interface BruAngrycreativeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAngrycreative: React.FC<BruAngrycreativeProps>;
export default BruAngrycreative;

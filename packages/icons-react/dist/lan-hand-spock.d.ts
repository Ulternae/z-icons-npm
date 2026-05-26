import React from 'react';

export interface LanHandSpockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandSpock: React.FC<LanHandSpockProps>;
export default LanHandSpock;

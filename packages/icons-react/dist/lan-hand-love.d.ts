import React from 'react';

export interface LanHandLoveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandLove: React.FC<LanHandLoveProps>;
export default LanHandLove;

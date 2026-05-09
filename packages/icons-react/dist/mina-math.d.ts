import React from 'react';

export interface MinaMathProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMath: React.FC<MinaMathProps>;
export default MinaMath;

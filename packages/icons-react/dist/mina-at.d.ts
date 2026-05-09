import React from 'react';

export interface MinaAtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAt: React.FC<MinaAtProps>;
export default MinaAt;

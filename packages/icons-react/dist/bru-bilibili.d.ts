import React from 'react';

export interface BruBilibiliProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBilibili: React.FC<BruBilibiliProps>;
export default BruBilibili;

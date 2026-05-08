import React from 'react';

export interface MinaFlaskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFlask: React.FC<MinaFlaskProps>;
export default MinaFlask;

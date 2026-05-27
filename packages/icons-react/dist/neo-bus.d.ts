import React from 'react';

export interface NeoBusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBus: React.FC<NeoBusProps>;
export default NeoBus;

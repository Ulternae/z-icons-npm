import React from 'react';

export interface NeoBarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBars: React.FC<NeoBarsProps>;
export default NeoBars;

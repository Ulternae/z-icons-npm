import React from 'react';

export interface NeoBugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBug: React.FC<NeoBugProps>;
export default NeoBug;

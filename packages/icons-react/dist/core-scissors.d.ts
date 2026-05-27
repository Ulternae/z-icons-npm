import React from 'react';

export interface CoreScissorsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreScissors: React.FC<CoreScissorsProps>;
export default CoreScissors;

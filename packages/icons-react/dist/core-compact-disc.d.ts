import React from 'react';

export interface CoreCompactDiscProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCompactDisc: React.FC<CoreCompactDiscProps>;
export default CoreCompactDisc;

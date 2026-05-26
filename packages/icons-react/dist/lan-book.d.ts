import React from 'react';

export interface LanBookProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBook: React.FC<LanBookProps>;
export default LanBook;

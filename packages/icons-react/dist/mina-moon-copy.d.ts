import React from 'react';

export interface MinaMoonCopyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMoonCopy: React.FC<MinaMoonCopyProps>;
export default MinaMoonCopy;

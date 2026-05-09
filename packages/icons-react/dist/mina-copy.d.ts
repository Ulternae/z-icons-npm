import React from 'react';

export interface MinaCopyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCopy: React.FC<MinaCopyProps>;
export default MinaCopy;

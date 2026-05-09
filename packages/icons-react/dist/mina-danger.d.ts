import React from 'react';

export interface MinaDangerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDanger: React.FC<MinaDangerProps>;
export default MinaDanger;

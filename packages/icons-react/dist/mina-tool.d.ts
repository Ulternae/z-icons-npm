import React from 'react';

export interface MinaToolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTool: React.FC<MinaToolProps>;
export default MinaTool;

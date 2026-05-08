import React from 'react';

export interface MinaMaximizeOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMaximizeOne: React.FC<MinaMaximizeOneProps>;
export default MinaMaximizeOne;

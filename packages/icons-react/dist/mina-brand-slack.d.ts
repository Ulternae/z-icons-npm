import React from 'react';

export interface MinaBrandSlackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandSlack: React.FC<MinaBrandSlackProps>;
export default MinaBrandSlack;

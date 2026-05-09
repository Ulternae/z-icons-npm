import React from 'react';

export interface MinaBinocularsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBinoculars: React.FC<MinaBinocularsProps>;
export default MinaBinoculars;

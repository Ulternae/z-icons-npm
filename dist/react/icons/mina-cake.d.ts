import React from 'react';

export interface MinaCakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCake: React.FC<MinaCakeProps>;
export default MinaCake;

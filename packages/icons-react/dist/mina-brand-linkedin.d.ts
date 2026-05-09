import React from 'react';

export interface MinaBrandLinkedinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandLinkedin: React.FC<MinaBrandLinkedinProps>;
export default MinaBrandLinkedin;

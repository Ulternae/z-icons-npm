import React from 'react';

export interface Lan9ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan9Thin: React.FC<Lan9ThinProps>;
export default Lan9Thin;

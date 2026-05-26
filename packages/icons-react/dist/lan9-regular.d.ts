import React from 'react';

export interface Lan9RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan9Regular: React.FC<Lan9RegularProps>;
export default Lan9Regular;

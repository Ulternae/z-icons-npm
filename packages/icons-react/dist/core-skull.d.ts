import React from 'react';

export interface CoreSkullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSkull: React.FC<CoreSkullProps>;
export default CoreSkull;

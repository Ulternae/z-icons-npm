import React from 'react';

export interface MinaEnvelopeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEnvelopeSolid: React.FC<MinaEnvelopeSolidProps>;
export default MinaEnvelopeSolid;

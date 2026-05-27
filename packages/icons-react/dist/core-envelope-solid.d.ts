import React from 'react';

export interface CoreEnvelopeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreEnvelopeSolid: React.FC<CoreEnvelopeSolidProps>;
export default CoreEnvelopeSolid;

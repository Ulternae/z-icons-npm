import React from 'react';

export interface NeoEnvelopeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoEnvelopeSolid: React.FC<NeoEnvelopeSolidProps>;
export default NeoEnvelopeSolid;

import React from 'react';

export interface NeoCloneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoClone: React.FC<NeoCloneProps>;
export default NeoClone;

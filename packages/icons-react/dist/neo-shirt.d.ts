import React from 'react';

export interface NeoShirtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoShirt: React.FC<NeoShirtProps>;
export default NeoShirt;

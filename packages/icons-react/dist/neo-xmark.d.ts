import React from 'react';

export interface NeoXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoXmark: React.FC<NeoXmarkProps>;
export default NeoXmark;

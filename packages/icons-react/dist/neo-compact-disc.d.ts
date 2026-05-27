import React from 'react';

export interface NeoCompactDiscProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCompactDisc: React.FC<NeoCompactDiscProps>;
export default NeoCompactDisc;

import React from 'react';

export interface NeoCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCheck: React.FC<NeoCheckProps>;
export default NeoCheck;

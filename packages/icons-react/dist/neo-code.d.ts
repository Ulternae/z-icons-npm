import React from 'react';

export interface NeoCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCode: React.FC<NeoCodeProps>;
export default NeoCode;

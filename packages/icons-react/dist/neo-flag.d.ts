import React from 'react';

export interface NeoFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFlag: React.FC<NeoFlagProps>;
export default NeoFlag;

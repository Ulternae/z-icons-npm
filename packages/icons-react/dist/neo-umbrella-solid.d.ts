import React from 'react';

export interface NeoUmbrellaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoUmbrellaSolid: React.FC<NeoUmbrellaSolidProps>;
export default NeoUmbrellaSolid;

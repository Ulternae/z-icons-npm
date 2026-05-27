import React from 'react';

export interface NeoNewspaperSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoNewspaperSolid: React.FC<NeoNewspaperSolidProps>;
export default NeoNewspaperSolid;

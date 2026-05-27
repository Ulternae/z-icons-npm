import React from 'react';

export interface NeoInboxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoInboxSolid: React.FC<NeoInboxSolidProps>;
export default NeoInboxSolid;

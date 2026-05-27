import React from 'react';

export interface NeoBookOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBookOpen: React.FC<NeoBookOpenProps>;
export default NeoBookOpen;

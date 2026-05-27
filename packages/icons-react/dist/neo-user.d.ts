import React from 'react';

export interface NeoUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoUser: React.FC<NeoUserProps>;
export default NeoUser;

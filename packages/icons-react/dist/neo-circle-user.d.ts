import React from 'react';

export interface NeoCircleUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCircleUser: React.FC<NeoCircleUserProps>;
export default NeoCircleUser;

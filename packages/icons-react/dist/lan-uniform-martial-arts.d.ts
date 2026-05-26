import React from 'react';

export interface LanUniformMartialArtsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUniformMartialArts: React.FC<LanUniformMartialArtsProps>;
export default LanUniformMartialArts;

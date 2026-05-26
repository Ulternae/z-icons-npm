import React from 'react';

export interface LanWardrobeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWardrobeSolid: React.FC<LanWardrobeSolidProps>;
export default LanWardrobeSolid;

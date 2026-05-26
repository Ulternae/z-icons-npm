import React from 'react';

export interface LanSquarePesetaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePeseta: React.FC<LanSquarePesetaProps>;
export default LanSquarePeseta;

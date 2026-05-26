import React from 'react';

export interface LanSquarePesetaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePesetaRegular: React.FC<LanSquarePesetaRegularProps>;
export default LanSquarePesetaRegular;

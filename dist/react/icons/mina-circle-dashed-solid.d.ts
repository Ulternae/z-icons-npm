import React from 'react';

export interface MinaCircleDashedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCircleDashedSolid: React.FC<MinaCircleDashedSolidProps>;
export default MinaCircleDashedSolid;

import React from 'react';

export interface MinaSearchXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchXSolid: React.FC<MinaSearchXSolidProps>;
export default MinaSearchXSolid;

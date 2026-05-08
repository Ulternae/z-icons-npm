import React from 'react';

export interface MinaFileXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFileXSolid: React.FC<MinaFileXSolidProps>;
export default MinaFileXSolid;

import React from 'react';

export interface MinaTreePalmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTreePalmSolid: React.FC<MinaTreePalmSolidProps>;
export default MinaTreePalmSolid;

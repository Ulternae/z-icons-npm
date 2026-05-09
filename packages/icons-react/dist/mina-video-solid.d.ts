import React from 'react';

export interface MinaVideoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVideoSolid: React.FC<MinaVideoSolidProps>;
export default MinaVideoSolid;

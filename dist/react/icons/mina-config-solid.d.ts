import React from 'react';

export interface MinaConfigSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaConfigSolid: React.FC<MinaConfigSolidProps>;
export default MinaConfigSolid;

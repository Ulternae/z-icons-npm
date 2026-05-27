import React from 'react';

export interface NeoLightbulbSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLightbulbSolid: React.FC<NeoLightbulbSolidProps>;
export default NeoLightbulbSolid;

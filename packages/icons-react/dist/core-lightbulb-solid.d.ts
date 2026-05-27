import React from 'react';

export interface CoreLightbulbSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLightbulbSolid: React.FC<CoreLightbulbSolidProps>;
export default CoreLightbulbSolid;

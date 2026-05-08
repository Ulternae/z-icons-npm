import React from 'react';

export interface MinaCloudFogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudFogSolid: React.FC<MinaCloudFogSolidProps>;
export default MinaCloudFogSolid;

import React from 'react';

export interface MinaCloudLightningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudLightningSolid: React.FC<MinaCloudLightningSolidProps>;
export default MinaCloudLightningSolid;

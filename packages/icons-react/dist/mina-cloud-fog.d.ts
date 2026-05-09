import React from 'react';

export interface MinaCloudFogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudFog: React.FC<MinaCloudFogProps>;
export default MinaCloudFog;

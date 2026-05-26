import React from 'react';

export interface LanCloudFogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudFog: React.FC<LanCloudFogProps>;
export default LanCloudFog;

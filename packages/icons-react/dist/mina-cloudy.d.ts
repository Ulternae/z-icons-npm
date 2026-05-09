import React from 'react';

export interface MinaCloudyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudy: React.FC<MinaCloudyProps>;
export default MinaCloudy;

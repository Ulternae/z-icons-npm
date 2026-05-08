import React from 'react';

export interface MinaConfigProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaConfig: React.FC<MinaConfigProps>;
export default MinaConfig;

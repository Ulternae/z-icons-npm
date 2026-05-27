import React from 'react';

export interface NeoLightbulbRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLightbulbRegularDuo: React.FC<NeoLightbulbRegularDuoProps>;
export default NeoLightbulbRegularDuo;

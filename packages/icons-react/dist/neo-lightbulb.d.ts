import React from 'react';

export interface NeoLightbulbProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLightbulb: React.FC<NeoLightbulbProps>;
export default NeoLightbulb;

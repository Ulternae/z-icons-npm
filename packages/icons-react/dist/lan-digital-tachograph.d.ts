import React from 'react';

export interface LanDigitalTachographProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDigitalTachograph: React.FC<LanDigitalTachographProps>;
export default LanDigitalTachograph;

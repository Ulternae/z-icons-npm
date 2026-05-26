import React from 'react';

export interface LanDigitalTachographThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDigitalTachographThin: React.FC<LanDigitalTachographThinProps>;
export default LanDigitalTachographThin;

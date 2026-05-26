import React from 'react';

export interface LanToggleOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToggleOn: React.FC<LanToggleOnProps>;
export default LanToggleOn;

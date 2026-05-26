import React from 'react';

export interface LanDisplayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDisplay: React.FC<LanDisplayProps>;
export default LanDisplay;

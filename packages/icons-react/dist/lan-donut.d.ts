import React from 'react';

export interface LanDonutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDonut: React.FC<LanDonutProps>;
export default LanDonut;

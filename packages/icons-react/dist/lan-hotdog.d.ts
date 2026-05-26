import React from 'react';

export interface LanHotdogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHotdog: React.FC<LanHotdogProps>;
export default LanHotdog;

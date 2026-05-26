import React from 'react';

export interface LanSickleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSickle: React.FC<LanSickleProps>;
export default LanSickle;

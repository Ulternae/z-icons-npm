import React from 'react';

export interface LanCircleDashedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDashed: React.FC<LanCircleDashedProps>;
export default LanCircleDashed;

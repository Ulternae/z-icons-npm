import React from 'react';

export interface LanCircle9ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle9Thin: React.FC<LanCircle9ThinProps>;
export default LanCircle9Thin;

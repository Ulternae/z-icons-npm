import React from 'react';

export interface MinaHeartDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartDot: React.FC<MinaHeartDotProps>;
export default MinaHeartDot;

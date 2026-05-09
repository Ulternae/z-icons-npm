import React from 'react';

export interface MinaTwoCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTwoCircle: React.FC<MinaTwoCircleProps>;
export default MinaTwoCircle;

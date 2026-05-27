import React from 'react';

export interface CoreMugSaucerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMugSaucer: React.FC<CoreMugSaucerProps>;
export default CoreMugSaucer;

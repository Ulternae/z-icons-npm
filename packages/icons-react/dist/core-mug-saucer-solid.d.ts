import React from 'react';

export interface CoreMugSaucerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMugSaucerSolid: React.FC<CoreMugSaucerSolidProps>;
export default CoreMugSaucerSolid;

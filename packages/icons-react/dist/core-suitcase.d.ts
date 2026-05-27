import React from 'react';

export interface CoreSuitcaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSuitcase: React.FC<CoreSuitcaseProps>;
export default CoreSuitcase;

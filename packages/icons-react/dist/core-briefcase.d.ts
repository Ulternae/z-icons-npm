import React from 'react';

export interface CoreBriefcaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBriefcase: React.FC<CoreBriefcaseProps>;
export default CoreBriefcase;

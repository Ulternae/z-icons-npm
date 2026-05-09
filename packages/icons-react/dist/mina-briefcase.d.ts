import React from 'react';

export interface MinaBriefcaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBriefcase: React.FC<MinaBriefcaseProps>;
export default MinaBriefcase;

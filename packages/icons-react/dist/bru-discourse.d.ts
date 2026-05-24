import React from 'react';

export interface BruDiscourseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDiscourse: React.FC<BruDiscourseProps>;
export default BruDiscourse;

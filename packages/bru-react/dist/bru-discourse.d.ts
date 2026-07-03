import React from 'react';

export interface BruDiscourseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDiscourse(props: BruDiscourseProps): React.ReactElement;
export default BruDiscourse;

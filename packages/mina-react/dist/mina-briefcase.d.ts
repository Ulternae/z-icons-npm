import React from 'react';

export interface MinaBriefcaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBriefcase(props: MinaBriefcaseProps): React.ReactElement;
export default MinaBriefcase;

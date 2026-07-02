import React from 'react';

export interface CoreBriefcaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBriefcase(props: CoreBriefcaseProps): React.ReactElement;
export default CoreBriefcase;

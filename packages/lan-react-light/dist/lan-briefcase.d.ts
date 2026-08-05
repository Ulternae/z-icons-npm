import React from 'react';

export interface LanBriefcaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBriefcase(props: LanBriefcaseProps): React.ReactElement;
export default LanBriefcase;

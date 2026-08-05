import React from 'react';

export interface LanBriefcaseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBriefcaseThin(props: LanBriefcaseThinProps): React.ReactElement;
export default LanBriefcaseThin;

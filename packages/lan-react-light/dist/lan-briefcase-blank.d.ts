import React from 'react';

export interface LanBriefcaseBlankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBriefcaseBlank(props: LanBriefcaseBlankProps): React.ReactElement;
export default LanBriefcaseBlank;

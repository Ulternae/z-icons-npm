import React from 'react';

export interface LanBriefcaseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBriefcaseRegular(props: LanBriefcaseRegularProps): React.ReactElement;
export default LanBriefcaseRegular;

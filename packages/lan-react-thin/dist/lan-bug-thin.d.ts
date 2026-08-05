import React from 'react';

export interface LanBugThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBugThin(props: LanBugThinProps): React.ReactElement;
export default LanBugThin;

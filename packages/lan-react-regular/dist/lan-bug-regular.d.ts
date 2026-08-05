import React from 'react';

export interface LanBugRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBugRegular(props: LanBugRegularProps): React.ReactElement;
export default LanBugRegular;

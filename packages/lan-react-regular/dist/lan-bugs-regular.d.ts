import React from 'react';

export interface LanBugsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBugsRegular(props: LanBugsRegularProps): React.ReactElement;
export default LanBugsRegular;

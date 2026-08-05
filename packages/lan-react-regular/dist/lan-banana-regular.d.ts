import React from 'react';

export interface LanBananaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBananaRegular(props: LanBananaRegularProps): React.ReactElement;
export default LanBananaRegular;

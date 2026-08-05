import React from 'react';

export interface LanBoltAutoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoltAutoRegular(props: LanBoltAutoRegularProps): React.ReactElement;
export default LanBoltAutoRegular;

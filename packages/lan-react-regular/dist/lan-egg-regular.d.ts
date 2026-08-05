import React from 'react';

export interface LanEggRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEggRegular(props: LanEggRegularProps): React.ReactElement;
export default LanEggRegular;

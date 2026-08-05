import React from 'react';

export interface LanWandRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWandRegular(props: LanWandRegularProps): React.ReactElement;
export default LanWandRegular;

import React from 'react';

export interface LanSaxophoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSaxophoneRegular(props: LanSaxophoneRegularProps): React.ReactElement;
export default LanSaxophoneRegular;

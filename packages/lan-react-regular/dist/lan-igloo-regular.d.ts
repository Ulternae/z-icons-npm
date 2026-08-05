import React from 'react';

export interface LanIglooRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIglooRegular(props: LanIglooRegularProps): React.ReactElement;
export default LanIglooRegular;

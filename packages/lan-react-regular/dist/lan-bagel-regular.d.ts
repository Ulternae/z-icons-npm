import React from 'react';

export interface LanBagelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBagelRegular(props: LanBagelRegularProps): React.ReactElement;
export default LanBagelRegular;

import React from 'react';

export interface LanFileUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileUserRegular(props: LanFileUserRegularProps): React.ReactElement;
export default LanFileUserRegular;

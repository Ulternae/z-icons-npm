import React from 'react';

export interface LanSteakRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSteakRegular(props: LanSteakRegularProps): React.ReactElement;
export default LanSteakRegular;

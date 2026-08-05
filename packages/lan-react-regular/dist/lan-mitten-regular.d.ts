import React from 'react';

export interface LanMittenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMittenRegular(props: LanMittenRegularProps): React.ReactElement;
export default LanMittenRegular;

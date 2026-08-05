import React from 'react';

export interface LanAxeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAxeRegular(props: LanAxeRegularProps): React.ReactElement;
export default LanAxeRegular;

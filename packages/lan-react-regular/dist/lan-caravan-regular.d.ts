import React from 'react';

export interface LanCaravanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaravanRegular(props: LanCaravanRegularProps): React.ReactElement;
export default LanCaravanRegular;

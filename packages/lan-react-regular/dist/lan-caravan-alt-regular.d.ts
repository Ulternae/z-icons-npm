import React from 'react';

export interface LanCaravanAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaravanAltRegular(props: LanCaravanAltRegularProps): React.ReactElement;
export default LanCaravanAltRegular;

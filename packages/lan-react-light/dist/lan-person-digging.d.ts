import React from 'react';

export interface LanPersonDiggingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDigging(props: LanPersonDiggingProps): React.ReactElement;
export default LanPersonDigging;

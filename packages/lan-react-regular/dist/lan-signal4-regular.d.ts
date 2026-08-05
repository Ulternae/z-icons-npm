import React from 'react';

export interface LanSignal4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignal4Regular(props: LanSignal4RegularProps): React.ReactElement;
export default LanSignal4Regular;

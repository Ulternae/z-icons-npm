import React from 'react';

export interface LanBrainCircuitRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrainCircuitRegular(props: LanBrainCircuitRegularProps): React.ReactElement;
export default LanBrainCircuitRegular;

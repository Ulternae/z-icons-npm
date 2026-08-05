import React from 'react';

export interface LanBrainCircuitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrainCircuitThin(props: LanBrainCircuitThinProps): React.ReactElement;
export default LanBrainCircuitThin;

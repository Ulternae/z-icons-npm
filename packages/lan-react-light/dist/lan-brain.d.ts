import React from 'react';

export interface LanBrainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrain(props: LanBrainProps): React.ReactElement;
export default LanBrain;

import React from 'react';

export interface LanTrainThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainThin(props: LanTrainThinProps): React.ReactElement;
export default LanTrainThin;

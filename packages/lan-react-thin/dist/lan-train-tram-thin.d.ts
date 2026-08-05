import React from 'react';

export interface LanTrainTramThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainTramThin(props: LanTrainTramThinProps): React.ReactElement;
export default LanTrainTramThin;

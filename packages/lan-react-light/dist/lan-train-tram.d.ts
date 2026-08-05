import React from 'react';

export interface LanTrainTramProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainTram(props: LanTrainTramProps): React.ReactElement;
export default LanTrainTram;

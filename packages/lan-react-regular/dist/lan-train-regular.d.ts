import React from 'react';

export interface LanTrainRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainRegular(props: LanTrainRegularProps): React.ReactElement;
export default LanTrainRegular;

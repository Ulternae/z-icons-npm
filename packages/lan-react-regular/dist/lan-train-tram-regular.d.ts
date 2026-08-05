import React from 'react';

export interface LanTrainTramRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainTramRegular(props: LanTrainTramRegularProps): React.ReactElement;
export default LanTrainTramRegular;

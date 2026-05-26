import React from 'react';

export interface LanTrainTramRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainTramRegular: React.FC<LanTrainTramRegularProps>;
export default LanTrainTramRegular;

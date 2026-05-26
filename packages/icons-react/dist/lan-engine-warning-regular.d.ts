import React from 'react';

export interface LanEngineWarningRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEngineWarningRegular: React.FC<LanEngineWarningRegularProps>;
export default LanEngineWarningRegular;

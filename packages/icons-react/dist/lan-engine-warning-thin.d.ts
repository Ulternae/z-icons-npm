import React from 'react';

export interface LanEngineWarningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEngineWarningThin: React.FC<LanEngineWarningThinProps>;
export default LanEngineWarningThin;

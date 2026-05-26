import React from 'react';

export interface LanEngineWarningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEngineWarning: React.FC<LanEngineWarningProps>;
export default LanEngineWarning;

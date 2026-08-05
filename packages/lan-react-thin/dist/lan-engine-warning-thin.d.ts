import React from 'react';

export interface LanEngineWarningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEngineWarningThin(props: LanEngineWarningThinProps): React.ReactElement;
export default LanEngineWarningThin;

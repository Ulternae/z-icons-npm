import React from 'react';

export interface LanEngineWarningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEngineWarning(props: LanEngineWarningProps): React.ReactElement;
export default LanEngineWarning;

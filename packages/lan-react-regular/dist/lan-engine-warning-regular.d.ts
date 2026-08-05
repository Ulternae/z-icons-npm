import React from 'react';

export interface LanEngineWarningRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEngineWarningRegular(props: LanEngineWarningRegularProps): React.ReactElement;
export default LanEngineWarningRegular;

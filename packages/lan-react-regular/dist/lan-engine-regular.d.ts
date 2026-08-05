import React from 'react';

export interface LanEngineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEngineRegular(props: LanEngineRegularProps): React.ReactElement;
export default LanEngineRegular;

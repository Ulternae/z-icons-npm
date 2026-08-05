import React from 'react';

export interface LanEngineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEngine(props: LanEngineProps): React.ReactElement;
export default LanEngine;

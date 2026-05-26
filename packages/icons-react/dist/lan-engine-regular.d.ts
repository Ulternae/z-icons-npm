import React from 'react';

export interface LanEngineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEngineRegular: React.FC<LanEngineRegularProps>;
export default LanEngineRegular;

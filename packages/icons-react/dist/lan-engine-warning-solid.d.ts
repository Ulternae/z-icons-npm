import React from 'react';

export interface LanEngineWarningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEngineWarningSolid: React.FC<LanEngineWarningSolidProps>;
export default LanEngineWarningSolid;

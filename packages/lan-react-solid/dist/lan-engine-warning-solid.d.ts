import React from 'react';

export interface LanEngineWarningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEngineWarningSolid(props: LanEngineWarningSolidProps): React.ReactElement;
export default LanEngineWarningSolid;

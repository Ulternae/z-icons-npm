import React from 'react';

export interface LanEngineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEngineSolid(props: LanEngineSolidProps): React.ReactElement;
export default LanEngineSolid;

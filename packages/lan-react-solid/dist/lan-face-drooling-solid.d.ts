import React from 'react';

export interface LanFaceDroolingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDroolingSolid(props: LanFaceDroolingSolidProps): React.ReactElement;
export default LanFaceDroolingSolid;

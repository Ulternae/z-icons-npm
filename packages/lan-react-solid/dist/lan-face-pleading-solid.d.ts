import React from 'react';

export interface LanFacePleadingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFacePleadingSolid(props: LanFacePleadingSolidProps): React.ReactElement;
export default LanFacePleadingSolid;

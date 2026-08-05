import React from 'react';

export interface LanFaceMeltingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMeltingSolid(props: LanFaceMeltingSolidProps): React.ReactElement;
export default LanFaceMeltingSolid;

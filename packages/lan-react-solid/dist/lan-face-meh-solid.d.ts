import React from 'react';

export interface LanFaceMehSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMehSolid(props: LanFaceMehSolidProps): React.ReactElement;
export default LanFaceMehSolid;

import React from 'react';

export interface LanSmokingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSmokingSolid(props: LanSmokingSolidProps): React.ReactElement;
export default LanSmokingSolid;

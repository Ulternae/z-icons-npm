import React from 'react';

export interface LanFaceDizzySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDizzySolid(props: LanFaceDizzySolidProps): React.ReactElement;
export default LanFaceDizzySolid;

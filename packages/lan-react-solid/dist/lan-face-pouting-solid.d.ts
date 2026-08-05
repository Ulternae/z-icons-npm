import React from 'react';

export interface LanFacePoutingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFacePoutingSolid(props: LanFacePoutingSolidProps): React.ReactElement;
export default LanFacePoutingSolid;

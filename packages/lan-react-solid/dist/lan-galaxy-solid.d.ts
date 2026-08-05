import React from 'react';

export interface LanGalaxySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGalaxySolid(props: LanGalaxySolidProps): React.ReactElement;
export default LanGalaxySolid;

import React from 'react';

export interface LanAquariusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAquariusSolid(props: LanAquariusSolidProps): React.ReactElement;
export default LanAquariusSolid;

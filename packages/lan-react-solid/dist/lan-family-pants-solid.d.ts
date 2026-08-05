import React from 'react';

export interface LanFamilyPantsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFamilyPantsSolid(props: LanFamilyPantsSolidProps): React.ReactElement;
export default LanFamilyPantsSolid;

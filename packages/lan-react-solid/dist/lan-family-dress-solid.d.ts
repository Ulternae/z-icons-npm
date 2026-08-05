import React from 'react';

export interface LanFamilyDressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFamilyDressSolid(props: LanFamilyDressSolidProps): React.ReactElement;
export default LanFamilyDressSolid;

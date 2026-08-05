import React from 'react';

export interface LanFamilyDressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFamilyDress(props: LanFamilyDressProps): React.ReactElement;
export default LanFamilyDress;

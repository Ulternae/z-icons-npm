import React from 'react';

export interface LanFamilyPantsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFamilyPants(props: LanFamilyPantsProps): React.ReactElement;
export default LanFamilyPants;

import React from 'react';

export interface LanFamilyDressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFamilyDressRegular(props: LanFamilyDressRegularProps): React.ReactElement;
export default LanFamilyDressRegular;

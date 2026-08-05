import React from 'react';

export interface LanFamilyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFamilyRegular(props: LanFamilyRegularProps): React.ReactElement;
export default LanFamilyRegular;

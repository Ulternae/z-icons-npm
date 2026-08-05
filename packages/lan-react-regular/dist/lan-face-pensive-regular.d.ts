import React from 'react';

export interface LanFacePensiveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFacePensiveRegular(props: LanFacePensiveRegularProps): React.ReactElement;
export default LanFacePensiveRegular;

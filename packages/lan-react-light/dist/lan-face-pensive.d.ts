import React from 'react';

export interface LanFacePensiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFacePensive(props: LanFacePensiveProps): React.ReactElement;
export default LanFacePensive;

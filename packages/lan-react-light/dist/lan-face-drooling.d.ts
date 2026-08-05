import React from 'react';

export interface LanFaceDroolingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDrooling(props: LanFaceDroolingProps): React.ReactElement;
export default LanFaceDrooling;

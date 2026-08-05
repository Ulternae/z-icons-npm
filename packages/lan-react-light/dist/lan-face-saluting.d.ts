import React from 'react';

export interface LanFaceSalutingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSaluting(props: LanFaceSalutingProps): React.ReactElement;
export default LanFaceSaluting;

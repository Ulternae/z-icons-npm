import React from 'react';

export interface LanSolarSystemProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSolarSystem(props: LanSolarSystemProps): React.ReactElement;
export default LanSolarSystem;

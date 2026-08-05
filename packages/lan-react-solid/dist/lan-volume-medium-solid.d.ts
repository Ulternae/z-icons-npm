import React from 'react';

export interface LanVolumeMediumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeMediumSolid(props: LanVolumeMediumSolidProps): React.ReactElement;
export default LanVolumeMediumSolid;

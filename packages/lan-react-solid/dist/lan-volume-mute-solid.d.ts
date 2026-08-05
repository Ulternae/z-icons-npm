import React from 'react';

export interface LanVolumeMuteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeMuteSolid(props: LanVolumeMuteSolidProps): React.ReactElement;
export default LanVolumeMuteSolid;

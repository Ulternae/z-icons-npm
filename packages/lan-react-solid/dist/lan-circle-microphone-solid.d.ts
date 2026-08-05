import React from 'react';

export interface LanCircleMicrophoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleMicrophoneSolid(props: LanCircleMicrophoneSolidProps): React.ReactElement;
export default LanCircleMicrophoneSolid;

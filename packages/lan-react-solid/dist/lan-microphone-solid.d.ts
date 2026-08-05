import React from 'react';

export interface LanMicrophoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicrophoneSolid(props: LanMicrophoneSolidProps): React.ReactElement;
export default LanMicrophoneSolid;

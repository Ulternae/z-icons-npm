import React from 'react';

export interface LanSquareMicrophoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareMicrophoneSolid(props: LanSquareMicrophoneSolidProps): React.ReactElement;
export default LanSquareMicrophoneSolid;

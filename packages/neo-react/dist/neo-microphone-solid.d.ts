import React from 'react';

export interface NeoMicrophoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMicrophoneSolid(props: NeoMicrophoneSolidProps): React.ReactElement;
export default NeoMicrophoneSolid;

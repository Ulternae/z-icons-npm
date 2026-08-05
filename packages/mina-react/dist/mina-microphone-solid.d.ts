import React from 'react';

export interface MinaMicrophoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMicrophoneSolid(props: MinaMicrophoneSolidProps): React.ReactElement;
export default MinaMicrophoneSolid;

import React from 'react';

export interface CoreMicrophoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMicrophoneSolid(props: CoreMicrophoneSolidProps): React.ReactElement;
export default CoreMicrophoneSolid;

import React from 'react';

export interface MinaVolumeNoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVolumeNone(props: MinaVolumeNoneProps): React.ReactElement;
export default MinaVolumeNone;

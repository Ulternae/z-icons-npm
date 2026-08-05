import React from 'react';

export interface NeoVolumeLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoVolumeLow(props: NeoVolumeLowProps): React.ReactElement;
export default NeoVolumeLow;

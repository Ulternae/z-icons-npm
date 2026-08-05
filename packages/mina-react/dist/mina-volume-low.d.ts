import React from 'react';

export interface MinaVolumeLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVolumeLow(props: MinaVolumeLowProps): React.ReactElement;
export default MinaVolumeLow;

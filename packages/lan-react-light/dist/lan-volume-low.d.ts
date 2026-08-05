import React from 'react';

export interface LanVolumeLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVolumeLow(props: LanVolumeLowProps): React.ReactElement;
export default LanVolumeLow;

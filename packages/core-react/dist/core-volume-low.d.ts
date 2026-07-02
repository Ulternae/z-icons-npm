import React from 'react';

export interface CoreVolumeLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreVolumeLow(props: CoreVolumeLowProps): React.ReactElement;
export default CoreVolumeLow;

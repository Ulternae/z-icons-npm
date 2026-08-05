import React from 'react';

export interface MinaSignalCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSignalCircle(props: MinaSignalCircleProps): React.ReactElement;
export default MinaSignalCircle;

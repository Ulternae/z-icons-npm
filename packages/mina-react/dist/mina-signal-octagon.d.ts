import React from 'react';

export interface MinaSignalOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSignalOctagon(props: MinaSignalOctagonProps): React.ReactElement;
export default MinaSignalOctagon;

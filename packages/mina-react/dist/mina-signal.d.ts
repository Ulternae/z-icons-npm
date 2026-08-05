import React from 'react';

export interface MinaSignalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSignal(props: MinaSignalProps): React.ReactElement;
export default MinaSignal;

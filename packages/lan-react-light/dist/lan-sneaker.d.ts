import React from 'react';

export interface LanSneakerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSneaker(props: LanSneakerProps): React.ReactElement;
export default LanSneaker;

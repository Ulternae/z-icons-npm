import React from 'react';

export interface LanBridgeCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBridgeCircleXmark(props: LanBridgeCircleXmarkProps): React.ReactElement;
export default LanBridgeCircleXmark;

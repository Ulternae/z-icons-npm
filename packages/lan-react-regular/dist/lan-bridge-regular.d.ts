import React from 'react';

export interface LanBridgeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBridgeRegular(props: LanBridgeRegularProps): React.ReactElement;
export default LanBridgeRegular;

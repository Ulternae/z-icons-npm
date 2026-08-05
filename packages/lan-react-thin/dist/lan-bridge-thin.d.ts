import React from 'react';

export interface LanBridgeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBridgeThin(props: LanBridgeThinProps): React.ReactElement;
export default LanBridgeThin;

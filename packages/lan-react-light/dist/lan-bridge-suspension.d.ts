import React from 'react';

export interface LanBridgeSuspensionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBridgeSuspension(props: LanBridgeSuspensionProps): React.ReactElement;
export default LanBridgeSuspension;

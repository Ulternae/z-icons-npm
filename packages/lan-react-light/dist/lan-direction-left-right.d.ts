import React from 'react';

export interface LanDirectionLeftRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDirectionLeftRight(props: LanDirectionLeftRightProps): React.ReactElement;
export default LanDirectionLeftRight;

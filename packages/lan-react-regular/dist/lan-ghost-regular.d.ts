import React from 'react';

export interface LanGhostRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGhostRegular(props: LanGhostRegularProps): React.ReactElement;
export default LanGhostRegular;

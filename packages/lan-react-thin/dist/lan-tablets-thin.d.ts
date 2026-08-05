import React from 'react';

export interface LanTabletsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTabletsThin(props: LanTabletsThinProps): React.ReactElement;
export default LanTabletsThin;

import React from 'react';

export interface LanAlignCenterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlignCenter(props: LanAlignCenterProps): React.ReactElement;
export default LanAlignCenter;

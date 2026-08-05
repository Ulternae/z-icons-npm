import React from 'react';

export interface LanTimelineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTimelineSolid(props: LanTimelineSolidProps): React.ReactElement;
export default LanTimelineSolid;

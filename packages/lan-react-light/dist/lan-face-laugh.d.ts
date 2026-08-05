import React from 'react';

export interface LanFaceLaughProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceLaugh(props: LanFaceLaughProps): React.ReactElement;
export default LanFaceLaugh;

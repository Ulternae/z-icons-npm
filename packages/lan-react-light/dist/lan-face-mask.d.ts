import React from 'react';

export interface LanFaceMaskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMask(props: LanFaceMaskProps): React.ReactElement;
export default LanFaceMask;

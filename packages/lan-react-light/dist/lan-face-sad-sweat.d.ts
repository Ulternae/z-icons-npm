import React from 'react';

export interface LanFaceSadSweatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSadSweat(props: LanFaceSadSweatProps): React.ReactElement;
export default LanFaceSadSweat;

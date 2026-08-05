import React from 'react';

export interface LanFaceTongueSweatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceTongueSweat(props: LanFaceTongueSweatProps): React.ReactElement;
export default LanFaceTongueSweat;

import React from 'react';

export interface LanFaceMeltingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMelting(props: LanFaceMeltingProps): React.ReactElement;
export default LanFaceMelting;

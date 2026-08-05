import React from 'react';

export interface LanFaceSadTearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSadTear(props: LanFaceSadTearProps): React.ReactElement;
export default LanFaceSadTear;

import React from 'react';

export interface LanNoteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNoteSolid(props: LanNoteSolidProps): React.ReactElement;
export default LanNoteSolid;

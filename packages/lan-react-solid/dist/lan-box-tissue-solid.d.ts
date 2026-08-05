import React from 'react';

export interface LanBoxTissueSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxTissueSolid(props: LanBoxTissueSolidProps): React.ReactElement;
export default LanBoxTissueSolid;

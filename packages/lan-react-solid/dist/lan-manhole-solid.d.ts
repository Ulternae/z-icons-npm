import React from 'react';

export interface LanManholeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanManholeSolid(props: LanManholeSolidProps): React.ReactElement;
export default LanManholeSolid;

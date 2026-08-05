import React from 'react';

export interface LanFluteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFluteSolid(props: LanFluteSolidProps): React.ReactElement;
export default LanFluteSolid;

import React from 'react';

export interface LanTricycleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTricycleSolid(props: LanTricycleSolidProps): React.ReactElement;
export default LanTricycleSolid;

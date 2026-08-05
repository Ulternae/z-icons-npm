import React from 'react';

export interface LanAsteriskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAsterisk(props: LanAsteriskProps): React.ReactElement;
export default LanAsterisk;

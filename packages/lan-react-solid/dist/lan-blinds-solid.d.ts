import React from 'react';

export interface LanBlindsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlindsSolid(props: LanBlindsSolidProps): React.ReactElement;
export default LanBlindsSolid;

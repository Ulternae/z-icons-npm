import React from 'react';

export interface LanSignPostsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignPostsSolid(props: LanSignPostsSolidProps): React.ReactElement;
export default LanSignPostsSolid;

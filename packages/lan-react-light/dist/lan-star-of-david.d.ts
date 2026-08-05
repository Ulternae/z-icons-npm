import React from 'react';

export interface LanStarOfDavidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarOfDavid(props: LanStarOfDavidProps): React.ReactElement;
export default LanStarOfDavid;

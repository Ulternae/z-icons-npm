import React from 'react';

export interface MinaDropletOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDropletOffSolid(props: MinaDropletOffSolidProps): React.ReactElement;
export default MinaDropletOffSolid;

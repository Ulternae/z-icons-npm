import React from 'react';

export interface LanDropletDegreeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDropletDegreeThin(props: LanDropletDegreeThinProps): React.ReactElement;
export default LanDropletDegreeThin;

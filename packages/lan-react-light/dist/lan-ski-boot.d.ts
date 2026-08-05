import React from 'react';

export interface LanSkiBootProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkiBoot(props: LanSkiBootProps): React.ReactElement;
export default LanSkiBoot;

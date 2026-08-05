import React from 'react';

export interface LanSkiBootSkiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkiBootSki(props: LanSkiBootSkiProps): React.ReactElement;
export default LanSkiBootSki;

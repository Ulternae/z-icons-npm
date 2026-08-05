import React from 'react';

export interface LanTomatoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTomato(props: LanTomatoProps): React.ReactElement;
export default LanTomato;

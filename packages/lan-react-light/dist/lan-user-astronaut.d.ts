import React from 'react';

export interface LanUserAstronautProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserAstronaut(props: LanUserAstronautProps): React.ReactElement;
export default LanUserAstronaut;

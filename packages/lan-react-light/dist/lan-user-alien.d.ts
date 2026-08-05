import React from 'react';

export interface LanUserAlienProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserAlien(props: LanUserAlienProps): React.ReactElement;
export default LanUserAlien;

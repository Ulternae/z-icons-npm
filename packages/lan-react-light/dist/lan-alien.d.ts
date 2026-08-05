import React from 'react';

export interface LanAlienProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlien(props: LanAlienProps): React.ReactElement;
export default LanAlien;

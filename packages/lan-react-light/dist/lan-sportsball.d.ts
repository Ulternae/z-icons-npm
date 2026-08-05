import React from 'react';

export interface LanSportsballProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSportsball(props: LanSportsballProps): React.ReactElement;
export default LanSportsball;

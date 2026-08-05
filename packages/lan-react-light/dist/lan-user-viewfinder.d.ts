import React from 'react';

export interface LanUserViewfinderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserViewfinder(props: LanUserViewfinderProps): React.ReactElement;
export default LanUserViewfinder;

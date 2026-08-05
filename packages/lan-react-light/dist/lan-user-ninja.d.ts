import React from 'react';

export interface LanUserNinjaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserNinja(props: LanUserNinjaProps): React.ReactElement;
export default LanUserNinja;

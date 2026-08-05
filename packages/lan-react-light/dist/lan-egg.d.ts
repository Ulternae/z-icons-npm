import React from 'react';

export interface LanEggProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEgg(props: LanEggProps): React.ReactElement;
export default LanEgg;

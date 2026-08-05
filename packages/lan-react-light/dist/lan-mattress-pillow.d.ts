import React from 'react';

export interface LanMattressPillowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMattressPillow(props: LanMattressPillowProps): React.ReactElement;
export default LanMattressPillow;

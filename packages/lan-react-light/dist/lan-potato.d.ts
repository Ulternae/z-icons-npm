import React from 'react';

export interface LanPotatoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPotato(props: LanPotatoProps): React.ReactElement;
export default LanPotato;

import React from 'react';

export interface LanAvocadoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAvocado(props: LanAvocadoProps): React.ReactElement;
export default LanAvocado;

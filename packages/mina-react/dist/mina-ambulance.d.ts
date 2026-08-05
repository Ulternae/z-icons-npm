import React from 'react';

export interface MinaAmbulanceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAmbulance(props: MinaAmbulanceProps): React.ReactElement;
export default MinaAmbulance;

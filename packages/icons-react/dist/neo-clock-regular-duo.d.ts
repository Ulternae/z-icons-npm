import React from 'react';

export interface NeoClockRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoClockRegularDuo: React.FC<NeoClockRegularDuoProps>;
export default NeoClockRegularDuo;

import React from 'react';

export interface NeoTrainRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTrainRegularDuo: React.FC<NeoTrainRegularDuoProps>;
export default NeoTrainRegularDuo;

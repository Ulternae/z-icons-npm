import React from 'react';

export interface NeoTrainRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTrainRegularDuo(props: NeoTrainRegularDuoProps): React.ReactElement;
export default NeoTrainRegularDuo;

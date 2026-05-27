import React from 'react';

export interface CoreTrainRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTrainRegularDuo: React.FC<CoreTrainRegularDuoProps>;
export default CoreTrainRegularDuo;

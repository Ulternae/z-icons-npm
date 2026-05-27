import React from 'react';

export interface NeoCircleQuestionRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCircleQuestionRegularDuo: React.FC<NeoCircleQuestionRegularDuoProps>;
export default NeoCircleQuestionRegularDuo;

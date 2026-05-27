import React from 'react';

export interface NeoQuestionRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoQuestionRegularDuo: React.FC<NeoQuestionRegularDuoProps>;
export default NeoQuestionRegularDuo;

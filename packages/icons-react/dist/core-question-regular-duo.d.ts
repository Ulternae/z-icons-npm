import React from 'react';

export interface CoreQuestionRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreQuestionRegularDuo: React.FC<CoreQuestionRegularDuoProps>;
export default CoreQuestionRegularDuo;

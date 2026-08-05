import React from 'react';

export interface CoreQuestionRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreQuestionRegularDuo(props: CoreQuestionRegularDuoProps): React.ReactElement;
export default CoreQuestionRegularDuo;

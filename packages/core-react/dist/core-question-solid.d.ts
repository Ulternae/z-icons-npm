import React from 'react';

export interface CoreQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreQuestionSolid(props: CoreQuestionSolidProps): React.ReactElement;
export default CoreQuestionSolid;

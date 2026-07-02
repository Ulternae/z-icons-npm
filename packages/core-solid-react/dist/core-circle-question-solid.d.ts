import React from 'react';

export interface CoreCircleQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCircleQuestionSolid(props: CoreCircleQuestionSolidProps): React.ReactElement;
export default CoreCircleQuestionSolid;

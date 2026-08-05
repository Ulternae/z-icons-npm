import React from 'react';

export interface NeoCircleQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCircleQuestionSolid(props: NeoCircleQuestionSolidProps): React.ReactElement;
export default NeoCircleQuestionSolid;

import React from 'react';

export interface NeoQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoQuestionSolid(props: NeoQuestionSolidProps): React.ReactElement;
export default NeoQuestionSolid;

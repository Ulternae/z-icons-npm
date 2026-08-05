import React from 'react';

export interface MinaLetterAOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterAOctagon(props: MinaLetterAOctagonProps): React.ReactElement;
export default MinaLetterAOctagon;

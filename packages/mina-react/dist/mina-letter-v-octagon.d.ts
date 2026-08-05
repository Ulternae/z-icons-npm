import React from 'react';

export interface MinaLetterVOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLetterVOctagon(props: MinaLetterVOctagonProps): React.ReactElement;
export default MinaLetterVOctagon;
